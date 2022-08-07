import 'dart:convert';

import 'package:amazon/constants/utils.dart';
import 'package:flutter/cupertino.dart';
import 'package:http/http.dart' as http;

void httpErrorHandle({
  required http.Response response,
  required BuildContext context,
}) {
  switch (response.statusCode) {
    case 200:
      showSnackbar(context, "Account created! Login with same credentials!");
      break;
    case 400:
      showSnackbar(context, jsonDecode(response.body)["msg"]);
      break;
    case 500:
      showSnackbar(context, jsonDecode(response.body)["error"]);
      break;
    default:
      showSnackbar(context, jsonDecode(response.body));
  }
}
