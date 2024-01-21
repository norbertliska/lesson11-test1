# Info pre Rostislav Jadavan
Ahoj, asi najtazsia uloha doteraz pre mna, snad bude aspon polovicny pocet bodov... Nakoniec som rad, ze funguje aspon jednoduchy NodeJS express..

Zbuildnutie lokalne islo dobre.

Potom tie GitHub Actions som dlho tápal (mal som si lepsie pozriet zoom-video) co kde ako, nakoniec to na niekolko pokusov vyslo.

Dowloadnutie do lokalneho dockeru fungovalo:
```
docker pull ghcr.io/norbertliska/lesson11-test1:build_7
```

Nasledne spustenie lokalne tiez fungovalo: 
```
docker run --env-file .env.docker -p 5000:2500 cc86507d237e74c7e6eb59f3c3770b73872c307a97879c36d45ed03ec34b3b32
http://localhost:5000/
```




# Info pre mna, ked sa k tomu neskor po case vratim

## init
```
npm init

npm i express

npm i dotenv

node src/server.js

npm run dev
```

## docker build
```
docker build -t lesson11-test1:latest -f Dockerfile .
```

trvalo 80 sekund

V Docker-Desktop -> Images -> Local -> novy image 
    "lesson11-test1"
    image id = 0412d3ad319f
    id=0412d3ad319fe6b2a004c61fef546d95caab24cdeba02713f42d40b41542f4fe
    140 MB


## docker run
```
docker run lesson11-test1
```

vrati Server listening on http://undefined:undefined

```
docker run --env-file .env.docker -p 3000:3000 lesson11-test1
Server listening on http://0.0.0.0:3000
```

http://127.0.0.1:3000/
funguje


## docker run - zmena portov

```
docker run --env-file .env.docker -p 4000:3000 lesson11-test1
Server listening on http://0.0.0.0:3000
```

http://127.0.0.1:4000/
funguje








