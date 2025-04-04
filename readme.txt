Starting off I had to install Docker

One completed I copied the project folder for the Task 4.2C Calculator and added a Docker file into the project folder where I put the following code in

FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3040
CMD ["node", "index.js"]

I then opened terminal and ran the command

"cd "C:\Users\micro\Documents\VSCode_Projects\calculator""

Followed by "docker build -t calculator-app ."

Afterwards I made a docker-compose.yml file and included the following code

services:
  app:
    build: .
    ports:
      - "3040:3040"

After saving that file I ran the "docker-compose up" command in terminal

Then I ran "http://localhost:3040/divide?n1=5&n2=5" and it displayed

"{"statuscode":200,"data":1}"

After confirming the application ran, I proceeded to create a Docker account

I ran "docker login" in the terminal, it required me to do browser authentication which I did

I then ran the following commands in the terminal

"docker tag calculator-app velnoxis/calculator-app:latest"

"docker push calculator-app velnoxis/calculator-app:latest"

After those commands successfully ran I opened the Docker Hub and was able to confirm the image had successfully been uploaded.