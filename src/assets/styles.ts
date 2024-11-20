export const styles = {
  headerRow: {
    fontWeight: "bold"
  },
  tableRow: {
    cursor: "pointer",
    "&:hover": {
      background: "#efefef"
    },
  },
  topSection: {
      marginTop: 2, 
      marginRight: 2,
      paddingX: 3,
  },
  topSectionLeft: {
      display: "flex",
      justifyContent: "flex-start",
  },
  topSectionRight: {
      display: "flex",
      justifyContent: "flex-end",
  },
  headerCell: {
      fontWeight: "bold"
  },
  fieldsTable: {
    width: "100%",
    maxHeight: "70vh",
    backgroundColor: "white"
  },
  tableHead: {
      backgroundColor: "#EDF2FA",
      fontWeight: "bold",
  }, 
  fieldKey: {
      cursor: "pointer",
  },
  subattributesTable: {
      backgroundColor: "#FAFAFA",
  },
  rowIconButton: {
      padding: 0.5,
      marginTop: -0.5
  },
  rowIcon: {
      fontSize: "16px"
  },
  flaggedConfidence: {
      padding: 0,
      margin: 0,
      color: "#9E0101",
  },
  unflaggedConfidence: {
      padding: 0,
      margin: 0,
  }
}

export const HeaderStyles = {
  iconLeft: {
    top: 5,
    color: "black",
  },
  icon: {
    top: 5,
    color: "black",
    right: 5
  },
  avatar: {
    width: 24,
    height: 24
  },
  tabPanel: {
    marginLeft: 10,
  },
  logo: {
    marginTop: 2.5,
    marginLeft: "1em",
    width: "2.5em",
    height: "2.5em",
    borderRadius: "50%",
    display: "inline-block",
    verticalAlign: "middle",
    cursor: "pointer"
  },
  menuSlotProps: {
    paper: {
      elevation: 0,
      sx: {
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        mt: 1.5,
        '& .MuiAvatar-root': {
          width: 32,
          height: 32,
          ml: -0.5,
          mr: 1,
        },
        '&::before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          right: 14,
          width: 10,
          height: 10,
          bgcolor: 'background.paper',
          transform: 'translateY(-50%) rotate(45deg)',
          zIndex: 0,
        },
      },
    },
  }
}

export const BottomBarStyles = {
  button: {
    marginX: 1,
  },
  paper: {
    position: 'fixed',
    bottom: 0, 
    left: '0px',
    right: 0,
    height: '60px',
    zIndex: 2,
  }
};

export const SubheaderStyles = {
  iconButton: {
    top: -5,
    color: "black",
  },
  icon: {
      fontSize: "15px"
  },
  box: {
      paddingTop: 1,
      paddingBottom: 1,
      backgroundColor: "white",
      width: "100%",
      boxShadow: 1
  },
  gridContainer: {
      margin: 0,
      padding: 0,
  },
  directoryDisplay: {
      display: "flex",
      justifyContent: "flex-start",
      marginLeft: 40,
      overflow: "auto",
      width: "80vw"
  },
  pageName: {
      display: "flex",
      justifyContent: "flex-start",
      marginLeft: 50,
      fontSize: "25px"
  },
  newProjectColumn: {
      display: "flex",
      justifyContent: "flex-end",
      marginRight: 5,
      marginTop: 3
  },
  subtext: {
      marginTop: 2,
      display: "flex",
      justifyContent: "flex-start",
      marginLeft: 50,
      fontSize: "15px"
  }
}

export const TableFiltersStyles = {
  tableFilter: {
      paddingBottom: 2,
  },
  box: {
      width: '50vw',
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: 5
  },
  closeIcon: {
      position: 'absolute',
      right: 0,
      top: 8,
      mb: 2,
  }
}