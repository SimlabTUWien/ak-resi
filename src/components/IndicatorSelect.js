import React, { useState, useEffect, useRef } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const indicatorMap = {
  1: { de: "Alle Sozialen Infrastrukturen", en: "All Social Infrastructures"},
  2: { de: "Allgemeinmediziner:innen", en: "General Practitioners" },
  3: { de: "Krankenhäuser", en: "Hospitals" },
  4: { de: "Pflegeheime", en: "Nursing Homes" },
  5: { de: "Kindergärten", en: "Kindergartens" },
  6: { de: "Schulen", en: "Schools" },
  7: { de: "Andere Solzialeinrichtungen", en: "Other Social Institutions" },
};


export default function IndicatorSelect({ value, onChange }) {

  const defaultValue = Object.keys(indicatorMap)[0];
  const selectedValue = value ?? defaultValue;

  const [open, setOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (open && selectRef.current) {
        const rect = selectRef.current.getBoundingClientRect();
        if (rect.top < 75 || rect.bottom > window.innerHeight - 100) {
          setOpen(false);
        }
      }
    };

    if (open) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);


  return (
    <Box sx={{ minWidth: 140, marginTop: 2 }}>
      <FormControl sx={{ minWidth: 140, width: 'auto' }}>
        <InputLabel 
          id="indicator-select-label"
          sx={{
            color: '#5e5e5e',
            // paddingTop: '2px',
            '&.Mui-focused': {
              color: '#76918e',
            },
          }}
        >
          Indikatoren
        </InputLabel>
        <Select
          ref={selectRef}
          labelId="indicator-select-label"
          id="indicator-select"
          label="Indikatoren"
          value={selectedValue}
          onChange={(event) => onChange(event.target.value)}
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          sx={{
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#8fb0ac',
            }
          }}
          MenuProps={{
            disableScrollLock: true,
          }}
        >
          {Object.entries(indicatorMap).map(([key, value]) => (
            <MenuItem
              key={key}
              value={key}
              sx={{
                backgroundColor: selectedValue === key ? '#daf2ef !important' : 'transparent',
                '&.Mui-selected': {
                  backgroundColor: '#daf2ef !important',
                  '&:hover': {
                    backgroundColor: '#a5cdc8 !important',
                  },
                },
                '&:hover': {
                  backgroundColor: '#a5cdc8 !important',
                },
              }}
            >
              <span style={{ transform: "translateY(2px)" }}>{value.de}</span>
            </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}
