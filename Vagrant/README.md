# 🖥️ SET-2025 Vagrant Multi-VM Infrastructure

This project automates the setup of multiple virtual machines using Vagrant and VirtualBox. Each VM is provisioned with Ubuntu 20.04, has Nginx installed, and serves a basic website accessible from the host machine.

## 📦 Requirements

Make sure you have the following installed:

- [VirtualBox](https://www.virtualbox.org/)
- [Vagrant](https://www.vagrantup.com/downloads)
- [Git](https://git-scm.com/) (optional, but recommended)

---

## 🚀 Getting Started

### 1. Clone this repository

```bash
git clone https://github.com/your-username/your-vagrant-repo.git
cd your-vagrant-repo
```

### 2. Start the virtual machines

```bash
vagrant up --parallel
```
This command will spin up 3 Ubuntu VMs, install Nginx, and expose the websites to your local machine.

## 🌐 Access the Websites
Each VM runs a simple web server via Nginx. After running `vagrant up`, access them using:

| VM Name | Guest IP      | Host Port | Access URL                                     |
| ------- | ------------- | --------- | ---------------------------------------------- |
| vm1     | 192.168.56.11 | 8081      | [http://localhost:8081](http://localhost:8081) |
| vm2     | 192.168.56.12 | 8082      | [http://localhost:8082](http://localhost:8082) |
| vm3     | 192.168.56.13 | 8083      | [http://localhost:8083](http://localhost:8083) |

>💡 Make sure these ports are not blocked or used by other applications.

## Configuration
All VM definitions are stored in the Vagrantfile. You can easily change the number of machines, IP addresses, ports, and resources using Ruby variables:

```ruby
machines = [
  { name: "vm1", ip: "192.168.56.11", host_port: 8081 },
  { name: "vm2", ip: "192.168.56.12", host_port: 8082 },
  { name: "vm3", ip: "192.168.56.13", host_port: 8083 },
]
```
Each VM runs a provision script that installs and starts Nginx, and serves a basic HTML site.
## Folder Structure
```bash
your-vagrant-repo/
├── Vagrantfile           # Main Vagrant configuration
├── scripts/
│   └── provision.sh        # Provision script to install Nginx
└── README.md             # This documentation
```
## 🔄 Reset or Remove VMs
If you want to stop or reset your VMs:

```bash
vagrant halt         # Stop all running VMs
vagrant destroy -f   # Remove all VMs completely
```

>⚠️ Destroying VMs will delete all data inside them.

## 📢 Notes
- Use vagrant reload if you modify the Vagrantfile.

- You can modify the HTML content in /var/www/html/index.nginx-debian.html inside the VMs.

- Consider adding domain resolution via /etc/hosts on your host for friendly URLs (optional).