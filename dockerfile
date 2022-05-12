# Pull official ubuntu base image
FROM golang:latest

# Set working directory
WORKDIR /app

# Copy repo
COPY . /app/

RUN apt-get update && apt-get install -y nodejs npm

RUN cd frontend ; npm install ; npm run build ; cp -r dist/ /app/dist

RUN cd backend ; go get ./... ; go build ./... ; cp portfolio-backend /app/

EXPOSE 80/tcp

EXPOSE 80/udp

CMD ./portfolio-backend
