import React, { useRef, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PagePagination = ({ pages, handleChange, ref }) => {
  const [page, setPage] = useState(1);

  return (
    <div className="w-screen flex justify-center text-white">
      <Stack spacing={2}>
        <Pagination
          count={pages}
          color={"success"}
          page={page}
          onChange={(event, value) => {
            setPage(value);
            handleChange(event, value);
          }}
        />
      </Stack>
    </div>
  );
};

export default PagePagination;
