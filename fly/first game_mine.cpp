//============================================================================
// Name        : first.cpp
// Author      :
// Version     :
// Copyright   : Your copyright notice
// Description : Hello World in C++, Ansi-style
//============================================================================

#include <iostream>
#include <cmath>
#include <cctype>
#include <stdlib.h>
#include <ctime>

using namespace std;

const int IGNORE = 256;

void PlayGame();

int GetGuess(int numberOfTries);

int main()
{

	srand((unsigned int)time(NULL));

	PlayGame();

	return 0;
}

void PlayGame()
{
	const int UPPER_BOUND = 100;
	int secretNumber = rand() % UPPER_BOUND;
	int numberOfTries = ceil(log2(UPPER_BOUND));

	int guess;

	bool wrongNumber;

	do
	{
		// Tu zmienilem
		guess = GetGuess(numberOfTries);
		wrongNumber = false;
		if (guess != secretNumber && numberOfTries > 0)

		{
			if (guess > secretNumber)
			{
				cout << "Your guess is too high!" << endl;
			}
			else
			{
				cout << "Your guess is too low!" << endl;
			}
			wrongNumber = true;
			numberOfTries--;
		}
		if (guess != secretNumber && numberOfTries == 0)
			break;

	} while (wrongNumber);

	if (guess == secretNumber)
	{
		cout << "Congrats! The secret number was: " << secretNumber << endl;
	}
	else
	{
		cout << "Oopsie, you didn't get it. The secret number was: " << secretNumber << endl;
	}

	//tu zmienilem
}

int GetGuess(int numberOfTries)
{
	int guess;
	bool failure;

	do
	{
		failure = false;
		cout << "Input a number between 0 and 100 (Number of tries left: " << numberOfTries << "): ";
		cin >> guess;

		if (cin.fail())
		{
			cin.clear();
			cin.ignore(IGNORE, '\n');
			cout << "Error! Try again.";
			failure = true;
		}
		else if (guess > 100)
		{
			cout << "Error! Try again.";
			failure = true;
		}
	} while (failure);

	return guess;
}
