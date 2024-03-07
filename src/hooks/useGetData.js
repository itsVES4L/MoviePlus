import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api/api";

const useGetData = (queryKey, endPoint, params) => {
  const { data, isLoading , isError } = useQuery({
    queryKey: [queryKey] ,
    queryFn: () => fetchData(endPoint, params),
  });
  return { data, isLoading, isError };
};
export default useGetData;
