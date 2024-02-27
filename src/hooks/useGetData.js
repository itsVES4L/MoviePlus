import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api/api";

const useGetData = (queryKey, endPoint) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchData(endPoint),
  });
  return { data, isLoading, isError };
};
export default useGetData;
