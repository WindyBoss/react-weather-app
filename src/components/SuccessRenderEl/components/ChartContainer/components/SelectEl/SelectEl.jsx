import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { useTheme } from 'context/useTheme';

import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

export default function SelectEl({ option, handleChange }) {
  const theme = useTheme();

  return (
    <Box sx={{ maxWidth: 150, marginBottom: '20px' }}>
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          sx={{ color: theme.mainTextColor }}
        >
          Period
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label="Period"
          onChange={handleChange}
          sx={{ color: theme.mainTextColor, fill: theme.mainTextColor }}
          IconComponent={KeyboardArrowDownRoundedIcon}
        >
          <MenuItem value={1}>Today</MenuItem>
          <MenuItem value={2}>Tomorrow</MenuItem>
          <MenuItem value={3}>+3</MenuItem>
          <MenuItem value={4}>+4</MenuItem>
          <MenuItem value={5}>+5</MenuItem>
          <MenuItem value={'daily'}>Daily</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
