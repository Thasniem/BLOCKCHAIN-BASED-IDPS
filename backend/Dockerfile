FROM python:3.10

WORKDIR /app

COPY . .

RUN pip install flask web3 requests flask-cors

CMD ["python", "-u", "app.py"]