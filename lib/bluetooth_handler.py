from bluetooth import *
import mido
from lib.log_setup import logger

class BluetoothHandler:
    def __init__(self):
        self.server_sock = None
        self.client_sock = None
        self.port = None
        self.is_connected = False
        self.device_name = "PianoLEDVisualizer"
        self.uuid = "00001101-0000-1000-8000-00805F9B34FB"  # Standard MIDI over Bluetooth UUID

    def start_server(self):
        """Start the Bluetooth server and advertise the service."""
        try:
            self.server_sock = bluetooth.BluetoothSocket(bluetooth.RFCOMM)
            self.server_sock.bind(("", bluetooth.PORT_ANY))
            self.server_sock.listen(1)
            
            # Advertise the service
            bluetooth.advertise_service(
                self.server_sock,
                self.device_name,
                service_id=self.uuid,
                service_classes=[self.uuid, bluetooth.SERIAL_PORT_CLASS],
                profiles=[bluetooth.SERIAL_PORT_PROFILE]
            )
            
            logger.info(f"Bluetooth server started. Device name: {self.device_name}")
            return True
        except Exception as e:
            logger.error(f"Failed to start Bluetooth server: {str(e)}")
            return False

    def accept_connection(self):
        """Accept incoming Bluetooth connections."""
        try:
            logger.info("Waiting for Bluetooth connection...")
            self.client_sock, client_info = self.server_sock.accept()
            self.is_connected = True
            logger.info(f"Accepted connection from {client_info}")
            return True
        except Exception as e:
            logger.error(f"Failed to accept Bluetooth connection: {str(e)}")
            return False

    def create_midi_port(self):
        """Create a virtual MIDI port for Bluetooth connection."""
        try:
            self.port = mido.open_output(f"{self.device_name} (Bluetooth)")
            logger.info(f"Created MIDI port: {self.port.name}")
            return True
        except Exception as e:
            logger.error(f"Failed to create MIDI port: {str(e)}")
            return False

    def send_midi_message(self, message):
        """Send MIDI message over Bluetooth connection."""
        if self.is_connected and self.port:
            try:
                self.port.send(message)
            except Exception as e:
                logger.error(f"Failed to send MIDI message: {str(e)}")

    def close(self):
        """Close all Bluetooth connections and cleanup."""
        if self.client_sock:
            self.client_sock.close()
        if self.server_sock:
            self.server_sock.close()
        if self.port:
            self.port.close()
        self.is_connected = False
        logger.info("Bluetooth connections closed")
