import os
import sys
import json


def handle(req):

    # Return object
    ret = {}

    try:

        if os.getenv('Http_Method') == 'POST':

            # Open log file for write
            f = open('pi.log', 'w')

            # Parse request data
            json_req = json.loads(req)

            # Write log to file
            f.write(str(json_req['log']))

            # Set return message
            ret = {'message': 'ok'}

            # parse to JSON
            ret = json.dumps(ret)

        else:

            # Open log file for read
            f = open('pi.log', 'r')

            try:

                # Replace \n with <br> tag
                logs = (f.read()).replace('\n', '<br>')

                # Add HTML template
                logs = '<html><head></head><body>{0}</body></html>'.format(
                    logs)

                # Add logs to return object
                ret = logs

            except:

                # Set error message
                ret = {'message': 'could not get logs'}

                # parse to JSON
                ret = json.dumps(ret)

        # Close file
        f.close()

    except:

        # Set error message
        ret = {'message': sys.exc_info()[0]}

        # parse to JSON
        ret = json.dumps(ret)

    # Return object
    print ret
