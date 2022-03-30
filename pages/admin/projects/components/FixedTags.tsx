import { Autocomplete, TextField } from "@mui/material";

export const FixedTags = () => {
  const options = ["Node.js", "Next.js", "React"];

  return (
    <Autocomplete
      multiple
      id="tags-outlined"
      options={options}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField
          {...params}
          label="Tags"
          placeholder="Project Tags"
          required
        />
      )}
    />
  );
};
