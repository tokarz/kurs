import abc;

class MyInterface(abc.ABC):
    @abc.abstractmethod
    def fun1(self):
        print('dupa')


class MyClass(MyInterface):
    def fun1(self):
        print('dupa')


classX = MyClass();
classX.fun1();