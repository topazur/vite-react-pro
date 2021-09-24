## Jenkins

> 不使用 docker 安装：docker outside docker 、 内部 go 插件有问题

### 2. jenkins 的安装和配置

#### 2.1 安装 java

```bash
# [mac 安装 openjdk](https://www.jianshu.com/p/8e82d7429528)
$ yum install java-1.8.0-openjdk* -y # centOS
```

#### 2.2 centOS 使用 rpm 安装

```bash
$ wget https://mxshop-files.oss-cn-hanzhou.aliyuncs.com/jenkins-2.284-1.1.noarch.rpm # oss友链
$ wget https://mirrors.tuna.tsinghua.edu.cn/jenkins/redhat-stable/jenkins-2.249.2-1.1.noarch.rpm # 清华

# 根据下载的文件进行安装
$ rpm -ivh jenkins-2.284-1.1.noarch.rpm
```

#### 2.3 配置与启用

```bash
$ vim /etc/sysconfig/jenkins
# 由jenkins改为root,防止权限问题出错（对权限不熟的情况）
JENKINS_USER="root"
# [端口范围](https://blog.csdn.net/yyj108317/article/details/81134241)
JENKINS_PORT="8088"

$ systemctl start jenkins # 启动进程
$ systemctl restart jenkins
$ ps aux|grep jenkins

# 打不开网址原因：防火墙
$ systemctl status firewalld.service # 查看防火墙状态
$ systemctl stop firewalld.service # 关闭防火墙
$ systemctl disabled firewalld.service # 禁用防火墙(防止重启重新打开)
# 服务器一般可配置安全组！！！
```

#### 2.4 进入主 UI

```bash
# Jenkins控制台日志显示可以获取密码的位置（在Jenkins主目录中）。 必须在新Jenkins安装中的安装向导中输入此密码才能访问Jenkins的主UI。 如果您在设置向导中跳过了后续的用户创建步骤， 则此密码还可用作默认admininstrator帐户的密码（使用用户名“admin”）

# 添加用户

# 首次不选择任何插件安装，因为地址较慢，待配置镜像源之后，再根据需要去安装

# Jenkins URL 默认配置即可
```

#### 2.5 替换镜像地址

```bash
# 修改default.json
$ cd /var/lib/jenkins/updates
$ sed -i 's#http://updates.jenkins-ci.org/download#https://mirrors.tuna.tsinghua.edu.cn/jenkins#g' default.json && sed -i 's#http://www.google.com#https://www.baidu.com#g' default.json

# 修改： Manage Jenkins > Manage Plugins > Advanced > Update Site
'https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json'

# 键入url：location.origin+'/restart' 手动重启
```

#### 2.6 插件

- Chinese 汉化
- SSH 远程登录上服务器执行 shell
- SSH Credentials 存储凭证 (位于系统配置)
- git+Pipeline 提供流水线构建
- deploy to container
- Send build artifacts over SSH 为构建后操作添加选项（需先添加 ssh sites 或者 ssh server）
  1. Name: 所连接的 server
  2. Source files: `workspace/<project>`下的文件或文件夹 上传到 server （因为当前对此 project 构建，可理解为 pwd 为此 project）
  3. Remove prefix: 去掉目录
  4. Remote directory: 登录到 server 所处的路径(配置后需手动创建) + Remote

#### 2.7 free style OR pipeline

##### free style

> 界面化操作

源码管理>构建>构建后操作

##### pipeline

> 代码化，可迁移度高。使用 Jenkinsfile 管理 Pipeline script
> 可参考 `流水线语法` 通过界面生成代码

- Pipeline script #手动写入 script
- Pipeline script from SCM #Jenkinsfile 加入版本控制
  > 两者区别就是 script 的读取方式不同

#### 2.8 构建触发器

- 远程链接触发
- 轮询一般用不到

#### 2.9 参数

- 字符参数：${参数}
- ...
