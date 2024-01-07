FROM python:3.8

# Projedeki requirements.txt dosyasını imaja kopyala
COPY requirements.txt /app/requirements.txt

RUN pip install --upgrade pip

# Kütüphaneleri yükle
RUN pip install --no-cache-dir -r /app/requirements.txt

RUN apt-get update && \
    apt-get install -y firefox-esr && \
    rm -rf /var/lib/apt/lists/*

# Geckodriver 0.33.0 sürümünü indirme ve yükleme adımları
RUN wget https://github.com/mozilla/geckodriver/releases/download/v0.33.0/geckodriver-v0.33.0-linux-aarch64.tar.gz && \
    tar -zxvf geckodriver-v0.33.0-linux-aarch64.tar.gz && \
    mv geckodriver /usr/local/bin/ && \
    rm geckodriver-v0.33.0-linux-aarch64.tar.gz && \
    chmod +x /usr/local/bin/geckodriver

COPY . /app
WORKDIR /app

CMD ["python", "api.py"]

