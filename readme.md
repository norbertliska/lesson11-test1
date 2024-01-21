#
npm init

#
npm i express

npm i dotenv

node src/server.js

npm run dev

# docker build
docker build -t lesson11-test1:latest -f Dockerfile .

trvalo 80 sekund

V Docker-Desktop -> Images -> Local -> novy image 
    "lesson11-test1"
    image id = 0412d3ad319f
    id=0412d3ad319fe6b2a004c61fef546d95caab24cdeba02713f42d40b41542f4fe
    140 MB

# docker run
docker run lesson11-test1

vrati Server listening on http://undefined:undefined

docker run --env-file .env.docker -p 3000:3000 lesson11-test1
Server listening on http://0.0.0.0:3000

http://127.0.0.1:3000/

docker run --env-file .env.docker -p 4000:3000 lesson11-test1
Server listening on http://0.0.0.0:3000




V2






