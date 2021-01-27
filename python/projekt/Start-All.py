import os,sys
import subprocess

os.chdir('restauracja');
os.system('npm install')

os.chdir('../restauracja-db');
os.system('npm install')

os.chdir('../restauracja-server');

os.system('npm install')

os.chdir('./restauracja-server')
serverFile = subprocess.Popen('node www')
print('Server started........');


os.chdir('../restauracja')
frontEndFile = os.popen('ng serve')
print('FE started........');


while True:
    out = frontEndFile.stdout.read(1)
    if out == '' and frontEndFile.poll() != None:
        break
<<<<<<< HEAD
=======


        
>>>>>>> 7e96db579286762f567f9ba067f20e827e87a565
