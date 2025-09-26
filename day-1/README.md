जब आप build/run करते हो (जैसे npm run build), तब आपके pages का HTML पहले से ही generate होकर static files (HTML, CSS, JS) के रूप में बन जाता है।
जब user आपकी site खोलता है, तो server सीधे वही static HTML files serve कर देता है।
Server पर हर request के समय कोई extra computation नहीं होता।