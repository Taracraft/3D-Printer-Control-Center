# Known issues

## Automatic network discovery

Automatic discovery can be unreliable in routed VLANs, VPNs, site-to-site links and networks that filter broadcasts. Configure a manual printer IP address during setup or in the integration options. Manual IP configuration has priority over automatic scanning.

## Printer-model coverage

Version `1.0.0` was practically tested with a Bambu Lab A1 environment. MQTT telemetry, SD-card FTPS access and native camera support depend on the printer model and firmware.
