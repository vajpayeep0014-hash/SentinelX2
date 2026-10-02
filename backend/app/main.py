from fastapi import FastAPI

app = FastAPI(title="SentinelX API")

@app.get("/health")
def health():
    return {"status": "ok"}