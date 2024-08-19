from pydantic import BaseModel


class DeepDiveIntoKeyComponents(BaseModel):
    database: str
    web_app_servers: str
    load_balancers: str
    caching: str
    single_points_failure: str
    authentication_authorization: str
    rate_limiting: str
