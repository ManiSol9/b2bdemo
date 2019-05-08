#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
This module creates API for getting reported property from
azure device twin
"""

import json
import threading
import bottle
import time
import sys
import iothub_service_client
import json
from iothub_service_client import IoTHubDeviceTwin, IoTHubError
from iothub_service_client_args import get_iothub_opt_with_module, OptionError
from bottle import run, route, get, post, request, template, \
Bottle,HTTPResponse


CONNECTION_STRING = "HostName=WRDM2-IOTHUB-CHETAB.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=G/pvf/JC8KdbN/eN4gtt273CJCl+VuulFS0onzA8RA0="

DEVICE_ID = "WRDM2_IOTDEVICE_CHETAN_2"
MODULE_ID = None


def get_iothub_device_twin():

    try:
        iothub_twin_method = IoTHubDeviceTwin(CONNECTION_STRING)
        # Query for device twin
        twin_info = iothub_twin_method.get_twin(DEVICE_ID)
        payload = json.loads(twin_info)
        return payload["properties"]["reported"]["softwareUpdate"]

    except IoTHubError as iothub_error:
        print ( "" )
        print ( "Unexpected error {0}" % iothub_error )
        return "error"
    except KeyboardInterrupt:
        print ( "" )
        print ( "IoTHubModuleTwin sample stopped" )


class RestServer():
    """
    This creates rest server using bottle
    """

    def __init__(self):

        self._stop_requested = False
        self._stopped = threading.Event()
        self._stopped.clear()
        self._rest_host = '10.115.6.140'
        self._rest_port = '8082'
        self._remote_host = '192.168.0.100'
        self._app = Bottle()
        self._is_connected = False
        self._route()

    def _get_update_status(self):
        return get_iothub_device_twin()
  
    def _route(self):
        ROUTE = '/updatestatus'
        self._app.route(ROUTE, method="GET", callback=self._get_update_status)

    def start(self):
        threading.Thread(target=self._rest_serve).start()


    def _rest_serve(self):
        self._app.run(host=self._rest_host, port=self._rest_port, debug=False)



if __name__ == '__main__':
    print ( "" )
    print ( "Python {0}".format(sys.version) )
    print ( "IoT Hub Service Client for Python" )
    print ( "" )
    try:
        (CONNECTION_STRING, DEVICE_ID, MODULE_ID) = get_iothub_opt_with_module(sys.argv[1:], CONNECTION_STRING, DEVICE_ID, MODULE_ID)
    except OptionError as option_error:
        print ( option_error )
        usage()
        sys.exit(1)

    print ( "Starting the IoT Hub Service Client ModuleTwin Python sample..." )
    print ( "    Connection string = {0}".format(CONNECTION_STRING) )
    print ( "    Device ID         = {0}".format(DEVICE_ID) )
    rest = RestServer()
    rest.start()


