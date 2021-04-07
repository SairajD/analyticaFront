import {createMuiTheme} from "@material-ui/core/styles";


export const Theme = createMuiTheme({
    palette:{
        primary:{
            main:"#FFB174"
        },
        secondary:{
            main:"#22EAAA",
            contrastText:"#ffffff"
        },
        alternate:{
            main:"#EE5A5A",
            contrastText:"#ffffff"
        }
    }
})

export const DarkTheme = createMuiTheme({
    palette:{
        type:"dark",
        primary:{
            main:"#892cdc",
            contrastText:"#ffffff"
        },
        secondary:{
            main:"#bc6ff1",
            contrastText:"#ffffff"
        },
        alternate:{
            main:"#52057b",
            contrastText:"#ffffff"
        }
    }
})