# Privacy and security

PrinterControlCenter 3D-Printer Control Center is designed for local-first operation.

Depending on the selected setup mode, Home Assistant stores the printer IP address, serial number, LAN access code and optional Cloud tokens in the integration config entry. Never post exported configuration entries publicly.

The local model archive, upload staging files and print queue are stored below the active Home Assistant configuration directory:

```text
<HA config>/printer_control_center/
```

Before posting logs or diagnostics, remove LAN access codes, Cloud tokens and personal data. Review IP addresses, serial numbers and model filenames before publishing them.
