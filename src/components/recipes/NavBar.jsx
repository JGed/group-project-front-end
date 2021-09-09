import React, { useState, useEffect } from "react";
import { Box, Typography, Button, IconButton } from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';


const Appbar = () => {


return (
<Toolbar>
<Button variant="contained">Default</Button>
<Button variant="contained" color="primary">
  Primary
</Button>
<Button variant="contained" color="secondary">
  Secondary
</Button>
<Button variant="contained" disabled>
  Disabled
</Button>
<Button variant="contained" color="primary" href="#contained-buttons">
  Link
</Button>
</Toolbar>
)
}

export default Appbar;