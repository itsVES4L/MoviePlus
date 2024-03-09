import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api/api";

const useGetData = (queryKey, endPoint, params, staleTime = 30000) => {
  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchData(endPoint, params),
    staleTime: staleTime,
  });
  return { data, isLoading, isError, isFetching };
};
export default useGetData;
