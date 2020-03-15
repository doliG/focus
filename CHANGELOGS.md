## v 1.0 (in development)

- [x] Implement the close application on MacOS
  - [x] Find a clean way (avoid `kill` or `pkill`)
  - [x] Implement the closer on macOS
- [x] Put the list of ennoying app in settings
- [ ] Add linux support
  - [x] Prepare generator
  - [ ] Implement linux close
- [ ] Create a README to explain the goal of the project

Resources used:

- https://askubuntu.com/questions/784974/how-to-close-application-from-terminal-same-way-as-exiting-it-properly
- https://osxdaily.com/2014/09/05/gracefully-quit-application-command-line/
- https://stackoverflow.com/questions/8683895/how-do-i-determine-the-current-operating-system-with-node-js

## Coming next

- [ ] Find a way to close tabs (check open browser and close tab in a blacklist)
- [ ] Implement a way for the user to add custom rules (app to close and not to close)
- [ ] Implement unfocus (restore ?) method, which reopens what have been shutdown
