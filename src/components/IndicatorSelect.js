import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { transform } from 'framer-motion';

const indicatorMap = {
  1: { de: "Allgemeinmediziner:innen", en: "General Practitioners" },
  2: { de: "Krankenhäuser", en: "Hospitals" },
  3: { de: "Pflegeheime", en: "Nursing Homes" },
  4: { de: "Kindergärten", en: "Kindergartens" },
  5: { de: "Schulen", en: "Schools" },
  6: { de: "Andere Solzialeinrichtungen", en: "Other Social Institutions" },
};

export default function IndicatorSelect() {
  const [indicator, setIndicator] = React.useState('');

  const handleChange = (event) => {
    setIndicator(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 140, marginTop: 2 }}>
      <FormControl sx={{ minWidth: 140, width: 'auto' }}>
        <InputLabel 
          id="indicator-select-label"
          sx={{
            color: '#5e5e5e',
            '&.Mui-focused': {
              color: '#76918e',
              
            },
          }}
        >
          Indikatoren
        </InputLabel>
        <Select
          labelId="indicator-select-label"
          id="indicator-select"
          value={indicator}
          label="Indikatoren"
          onChange={handleChange}
          sx={{
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#8fb0ac',
            },
          }}
        >
          {Object.entries(indicatorMap).map(([key, value]) => (
              <MenuItem
                key={key}
                value={key}
                sx={{
                  '&.Mui-selected': {
                    backgroundColor: '#daf2ef',
                    '&:hover': {
                      backgroundColor: '#a5cdc8', // Darker red on hover
                      
                    },
                  },
                }}
              >
                <span style={{transform: "translateY(2px)"}}>{value.de}</span> {/* Display the German text, switch to en for English */}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}
