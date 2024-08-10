from pydantic import BaseModel


class CapacityEstimation(BaseModel):

    daily_users_count: float
    max_concurrent_users_count: float
    read_ops_count: float
    write_ops_count: float
    peak_read_ops_count: float
    peak_write_ops_count: float
    storage: str
    total_amount_storage: str
    growth_rate: float
    include_cache_memory: bool
    cache_memory_size: float
    traffic_volume: float
    data_transfer_size: float
