import { Autocomplete, TextField } from "@mui/material";
import { ProjectContext } from "@pages/admin/projects/new";
import { useContext } from "react";

export const FixedTags = () => {
  const options = ["Node.js", "Next.js", "React"];
  const {
    tags: { tags, setTags },
  } = useContext(ProjectContext);

  return (
    <Autocomplete
      multiple
      id="tags-outlined"
      options={options}
      filterSelectedOptions
      value={tags}
      renderInput={(params) => (
        <TextField {...params} label="Tags" placeholder="Project Tags" />
      )}
      onChange={(_, value) => setTags(value)}
    />
  );
};
