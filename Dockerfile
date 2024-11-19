FROM  node:21.7.1
WORKDIR /app
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm",start"]
