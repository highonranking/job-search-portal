import React, {useState} from 'react'
import { Grid, TextField, InputLabel, Select, MenuItem, Chip, FormControlLabel, Checkbox } from '@mui/material'

const Filters = ({onFilter}) => {
    const [filters, setFilters] = useState({
        minExperience: "",
        companyName: "",
        location: "",
        remote: false,
        jobRole: [],
        minBasePay: "",
      });

      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setFilters((prevFilters) => ({
          ...prevFilters,
          [name]: newValue,
        }));
    
        // Apply filters immediately as the user types
        onFilter({
          ...filters,
          [name]: newValue,
        });
      };

    const handleRoleChange = (selectedRoles) => {
        setFilters((prevFilters) => ({
          ...prevFilters,
          jobRole: selectedRoles,
        }));
    
        // Apply filters immediately as the user selects roles
        onFilter({
          ...filters,
          jobRole: selectedRoles,
        });
      };
      const handleRoleDelete = (roleToDelete) => {
        setFilters((prevFilters) => ({
          ...prevFilters,
          jobRole: prevFilters.jobRole.filter((role) => role !== roleToDelete),
        }));
    
        // Apply filters immediately as the user deletes a role
        onFilter({
          ...filters,
          jobRole: filters.jobRole.filter((role) => role !== roleToDelete),
        });
      };

    
  return (
    <div  className="filter">
        <form>
        {/** Company name Filter */}
        <Grid container spacing={2} justifyContent='center'>
            <Grid item xs={12} sm={2}>
                <TextField
                type="text"
                name="companyName"
                label="Company Name"
                placeholder="Company Name"
                value={filters.companyName}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                margin="normal"
                />
            </Grid>
       

        {/** Role Filter */}

        <Grid item xs={12} sm={2}>
            <InputLabel>Role</InputLabel>
            <Select
              name="jobRole"
              label="Role"
              multiple
              value={filters.jobRole}
              onChange={(e) => handleRoleChange(e.target.value)}
              variant="outlined"
              fullWidth
              margin="normal"
              renderValue={(selected) => (
                <div>
                  {selected.map((role) => (
                    <Chip
                      key={role}
                      label={role}
                      onDelete={() => handleRoleDelete(role)}
                      style={{ marginRight: 5, marginBottom: 5 }}
                    />
                  ))}
                </div>
              )}
            >
              {[
                "Frontend",
                "Backend",
                "Full Stack",
                "DevOps",
                "UI Designer",
                "Operations",
                "HR",
              ].map((role) => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </Select>
          </Grid>

          {/** Location */}

          <Grid item xs={12} sm={2}>
            <TextField
              type="text"
              name="location"
              label="Location"
              placeholder="Location"
              value={filters.location}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>

          {/** minimum experience  */}
          <Grid item xs={12} sm={2}>
            <TextField
              type="text"
              name="minExperience"
              label="Min Experience"
              placeholder="Select Min Experience"
              value={filters.minExperience}
              onChange={handleChange}
              select
              variant="outlined"
              fullWidth
              margin="normal"
            >
              <MenuItem value="">Select Min Experience</MenuItem>
              <MenuItem value="1">1 Year</MenuItem>
              <MenuItem value="2">2 Years</MenuItem>
              <MenuItem value="3">3 Years</MenuItem>
              <MenuItem value="4">4 Years</MenuItem>
              <MenuItem value="5">5 Years</MenuItem>
              <MenuItem value="6">6 Years</MenuItem>
              <MenuItem value="7">7 Years</MenuItem>
            </TextField>
          </Grid>


          {/** minimum pay */}

          <Grid item xs={12} sm={2}>
            <TextField
              type="text"
              name="minBasePay"
              label="Min Base Pay"
              placeholder="Select Min Base Pay"
              value={filters.minBasePay}
              onChange={handleChange}
              select
              variant="outlined"
              fullWidth
              margin="normal"
            >
              <MenuItem value="">Select Min Base Pay</MenuItem>
              <MenuItem value="0">0L</MenuItem>
              <MenuItem value="10">10L</MenuItem>
              <MenuItem value="20">20L</MenuItem>
              <MenuItem value="30">30L</MenuItem>
              <MenuItem value="40">40L</MenuItem>
              <MenuItem value="50">50L</MenuItem>
              <MenuItem value="60">60L</MenuItem>
              <MenuItem value="70">70L</MenuItem>
              <MenuItem value="80">80L</MenuItem>
              <MenuItem value="90">90L</MenuItem>
              <MenuItem value="100">100L</MenuItem>
            
            </TextField>
          </Grid>


          {/** Remote */}

          <Grid item xs={12} sm={2}  style={{ marginTop: '24px' }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="remote"
                  checked={filters.remote}
                  onChange={handleChange}
                  color="warning"
                  
                />
              }
              label="Remote"
            />
          </Grid>

        </Grid>
        </form>
    </div>
  )
}

export default Filters