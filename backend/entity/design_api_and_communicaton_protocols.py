from pydantic import BaseModel


class DesignApiAndCommunicationProtocols(BaseModel):

    api_requests: dict[str, str]