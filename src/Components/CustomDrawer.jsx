import PropTypes from "prop-types";
import {
  Box,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const CustomDrawer = ({ toggleDrawer }) => {
  const menuItems = [
    { label: "Inbox", icon: <InboxIcon /> },
    { label: "Starred", icon: <MailIcon /> },
    { label: "Send email", icon: <InboxIcon /> },
    { label: "Drafts", icon: <MailIcon /> },
  ];

  const secondaryItems = [
    { label: "All mail", icon: <InboxIcon /> },
    { label: "Trash", icon: <MailIcon /> },
    { label: "Spam", icon: <InboxIcon /> },
  ];

  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {secondaryItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

// Prop validation
CustomDrawer.propTypes = {
  toggleDrawer: PropTypes.func.isRequired, // toggleDrawer must be a function and is required
};

export default CustomDrawer;
