import React from "react";
import {
  Button,
  InputAdornment,
  Stack,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Close, SearchIcon } from "../assets/Icons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { getfilters } from "../api/News";
import { appendNewsData } from "../redux/slices/News";
import { useDispatch } from "react-redux";
import { resetAppState } from "../redux/store";

const Search = ({ toggle, closeSearch }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const dispatch = useDispatch();

  const textFieldStyles = {
    width: isMobile ? "100%" : null,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white", // Border color
      },
      "&:hover fieldset": {
        borderColor: "white", // Border color on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: "white", // Border color when focused
      },
      "& svg": {
        color: "white", // Icon color
      },
    },
    input: {
      color: "white", // Input text color
    },
    "& .MuiInputBase-input::placeholder": {
      color: "white", // Placeholder text color
      opacity: 1, // Ensure visibility
    },
    "& .MuiInputLabel-root": {
      color: "white", // Label color
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "white", // Label color when focused
    },
  };

  const defaultValues = {
    search: "",
    startdate: "",
    enddate: "",
  };

  const schema = yup.object({
    search: yup.string().required("Search field is required"),
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = (data) => {
    // console.log(data);
    const sdate = data.startdate ? new Date(data.startdate) : null;
    const edate = data.enddate ? new Date(data.enddate) : null;
    const sd = data.startdate ? sdate.toISOString().split("T")[0] : null;
    const ed = data.enddate ? edate.toISOString().split("T")[0] : null;

    // Current Date

    const today = new Date();

    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const dd = String(today.getDate()).padStart(2, "0");

    const currentDate = `${yyyy}-${mm}-${dd}`;

    // API CALL

    const endd = data.enddate ? ed : currentDate;

    const apiObject = {
      searchdata: data.search,
      startdate: data.startdate ? sd : "",
      enddate: data.startdate ? endd : "",
    };

    // console.log(apiObject);

    getfilters(apiObject)
      .then((res) => {
        // console.log(res);
        const success = res.data.success;
        if (success) {
          const response = res.data.filternews;
          resetAppState();
          dispatch(appendNewsData(response));
          closeSearch();
        } else {
          // const response = [];
          resetAppState();
          closeSearch();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCloseSearch = () => {
    reset();
    closeSearch();
  };

  return (
    <Stack
      direction={isMobile ? "column" : "row"}
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{
        width: isMobile ? "100%" : "89%",
        position: "absolute",
        top: toggle ? "80px" : "-2000%",
        bgcolor: "primary.main",
        py: 2,
        px: 1,
        transition: "all 0.5s ease",
        zIndex: -1,
        height: "auto",
        left: isMobile ? 0 : null,
      }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        {...register("search")}
        autoComplete="off"
        placeholder="Search..."
        sx={textFieldStyles}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        error={!!errors.search}
        helperText={errors.search?.message}
      />
      <Controller
        name="startdate"
        control={control}
        render={({ field }) => (
          <DatePicker
            {...field}
            sx={textFieldStyles}
            value={field.value ? dayjs(field.value) : null} // Ensure valid dayjs object
            onChange={(date) =>
              field.onChange(date ? dayjs(date).toISOString() : "")
            }
            label="Start Date"
          />
        )}
      />
      <Controller
        name="enddate"
        control={control}
        render={({ field }) => (
          <DatePicker
            {...field}
            sx={textFieldStyles}
            value={field.value ? dayjs(field.value) : null} // Ensure valid dayjs object
            onChange={(date) =>
              field.onChange(date ? dayjs(date).toISOString() : "")
            }
            label="End Date"
          />
        )}
      />
      <Stack direction="row" alignItems="center" spacing={2}>
        <Button
          variant="contained"
          type="submit"
          startIcon={<SearchIcon />}
          color="secondary"
        >
          Search
        </Button>
        <Button
          variant="outlined"
          startIcon={<Close />}
          onClick={handleCloseSearch}
          color="secondary"
        >
          Cancel
        </Button>
      </Stack>
    </Stack>
  );
};

export default Search;
