build:
	docker compose build --no-cache portfolio-next

start:
	docker compose up -d

stop:
	docker compose down