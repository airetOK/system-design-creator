FROM python:3.9.4-buster

RUN mkdir app

WORKDIR /app

COPY . .

RUN pip install --no-cache-dir -r requirements.txt

CMD ["python", "main.py"]