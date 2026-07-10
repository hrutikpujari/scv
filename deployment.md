# SCV V3 Deployment

If anything doesn't work or is a new concept try sending this file to a LLM and ask for it to explain.

---

## 1. **Accessing the Server**

password: `R@jlakshmi123456`
```sh
ssh root@scv.org.in
```
---

## 2. **Getting Your Code onto the Server**

#### Using `scp`
```sh
scp -r <local_folder> root@<SERVER_IP>:~/projects/scv-v3
```

#### Using `rsync`
```sh
rsync -avz <local_folder>/ root@<SERVER_IP>:~/projects/scv-v3
```
- Replace `<local_folder>` with your project folder name.
- Enter the password if asked.

---

## 3. **Rebuilding the Docker Image**

After updating your files, you need to rebuild the Docker image:

```sh
cd ~/projects/scv-v3
docker build -t scv-v3 .
```
- Wait for it to finish.

---

## 4. **Restarting the Application**

Once the image is built, restart the service:

```sh
sudo systemctl restart scv-v3.service
```
- This will restart your Next.js app with the new changes.

---

## 5. **Regenerating SSL Certificate**
> **Only do this if the SSL certificate is about to expire!**  
> (The current certificate expires mid 2026.)

To renew or generate a new SSL certificate:

```sh
sudo certbot certonly --standalone
```
- Follow instructions from certbot on screen.  
- You may need to stop your web server temporarily if it asks.

---