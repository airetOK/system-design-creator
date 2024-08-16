from pydantic import BaseModel


class CapacityEstimation(BaseModel):

    daily_users_count: str
    max_concurrent_users_count: str
    read_ops_count: str
    write_ops_count: str
    peak_read_ops_count: str
    peak_write_ops_count: str
    storage: str
    total_amount_storage: str
    growth_rate: str
    include_cache_memory: str
    cache_memory_size: str
    traffic_volume: str
    data_transfer_size: str
