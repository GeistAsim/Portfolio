import os
import smtplib, ssl
from dotenv import load_dotenv
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# get .env
ENV = os.getenv("APP_ENV", "Development")


# Check if ENV is Development
if ENV == "Development":
    BASE_DIR = os.path.dirname(
        os.path.dirname(os.path.abspath(__file__))
    )  # project root
    env_file = os.path.join(BASE_DIR, "env", f".env.{ENV}")

    print("Loading env file for Email Server from: ", env_file)
    load_dotenv(dotenv_path=env_file)


# common email sender function
def email_Server(sender_email, password, to_email, subject, body):
    # create a MiMe message with UTF-8 encoding
    message = MIMEMultipart('alternative')
    message["Form"] = sender_email
    message["To"] = to_email
    message["Subject"] = subject

    encodedBody = MIMEText(body, "plain", "utf-8")
    message.attach(encodedBody)

    try:
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login(sender_email, password)
            server.sendmail(sender_email, to_email, message.as_string())

        print(f"Email deliver seccussfully to: {to_email}")

    except Exception as e:
        print(f"Error sending mail to: {to_email}")
        print(f"Error: {e}")


# Loading email and password
ES_MAIL = os.getenv("ES_MAIL")
ES_PASS = os.getenv("ES_PASS")

print("Mail: ", ES_MAIL)
