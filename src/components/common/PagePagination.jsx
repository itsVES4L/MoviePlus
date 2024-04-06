import React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSearchParams } from "react-router-dom";

const PagePagination = ({ pages, handleChange }) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <div className="w-screen flex justify-center text-white">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Stack className="text-white" spacing={2}>
          <Pagination
            className="text-white"
            size="small"
            count={pages}
            color={"success"}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
            onChange={(event, value) => {
              handleChange(event, value);
            }}
            // defaultPage={currentPage !== null ? currentPage : page}
          />
        </Stack>
      </ThemeProvider>
    </div>
  );
};

export default PagePagination;
