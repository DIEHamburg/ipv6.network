# IPv6.Network

> IPV6 Networking .Why still IPv4? IPV6 is daunting for many people and companies. But the first appearance is deceptive. Here is a example simulation of a functional IPV6 network (not dual stack)!

> [Hier](./README.md) ist die Doku auch in deutsch.

## Disclaimer

> Please read it at the beginning!

### School Project (DIEHamburg)

- The products are and should not be used commercially / profit -oriented
- We want to show what you can do here
- School projects are an opportunity for us we should use

### "Finished" -> No further development

- Projects have been completed and are not developed further
- Code cannot be 100% correct in the future
- Security weaknesses through older versions or new possibilities are to be expected

> In the following is the complete documentation of the workflow with the respective config scripts. Feel free to try it out yourself! The newest files are the ```main-lf9.pkt``` and the ```main-ospfv3-lf9.pkt```.

## Entwickler*Innen

- [Florian (Flowtastisch)](https://github.com/flowtastisch)
- [Leona (lyonidass)](https://github.com/lyonidass)
- [Noah (idkwtff)](https://github.com/idkwtff)
- [Rayan (draarayan)](https://github.com/draarayan)

## Credits

- [Cisco Packet Tracer](https://www.netacad.com/courses/packet-tracer)
- CSS
- HTML
- [NodeJS](https://nodejs.org/en)
- [TypeScript](https://www.typescriptlang.org/)

## Umgesetze Features

- Transport network router config (Transportnetz Router Config)

> Connections of the router to each other. Routes are only in the next section.

- Location configuration (Standort Konfiguration)

> Connections within the individual networks and connection of the networks to each other by means of static routes in the ```main-lf9.pkt``` and with OSPFv3 in the ```main-ospfv3-lf9.pkt```.

- Banner creation (Banner erstellen)

> Banner when accessing a router and switch. For the deterrent of unauthorized users.

- Password configuration (Passwort Konfiguration)

> Passwords if you are directly on the switch or router (generated passwords).

- SSH access (SSH Zugänge)

> Ping to the routers and switches with ssh.

- ACL configuration (ACL Konfiguration)

> Restrict access by means of rules: Only Hamburg can use HTTP and Ping to Berlin and München. Only Hamburg can also use ssh to connect to all routers & switches. All clients can use https.

## Transportnetz Router Config

> The config scripts are only available with German comments

### Alle Router

Aktivierung

    enable

In Config gehen

    configure terminal

Aktiviere ipv6

    ipv6 unicast-routing

Keine Domainnamenauflösung

    no ip domain-lookup

### RT-M-01

#### MuenchenLuebeck Connection

    interface Serial0/1/0
    description MuenchenLuebeck
    ipv6 address FD01:01:01:20::D/64
    no shutdown

#### MuenchenBerlin Connection

    interface Serial0/1/1
    description MuenchenBerlin
    ipv6 address FD01:01:01:30::D/64
    no shutdown

#### MuenchenHamburg Connection

    interface Serial0/2/0
    description MuenchenHamburg
    ipv6 address FD01:01:01:50::D/64
    no shutdown

### RT-B-01

#### BerlinMuenchen Connection

    interface Serial0/1/0
    description BerlinMuenchen
    ipv6 address FD01:01:01:30::2/64
    no shutdown

#### BerlinHamburg Connection

    interface Serial0/1/1
    description BerlinHamburg
    ipv6 address FD01:01:01:40::2/64
    no shutdown

#### BerlinLuebeck Connection

    interface Serial0/2/0
    description BerlinLuebeck
    ipv6 address FD01:01:01:60::2/64
    no shutdown

### RT-HH-01

#### HamburgLuebeck Connection

    interface Serial0/1/0
    description HamburgLuebeck
    ipv6 address FD01:01:01:10::8/64
    no shutdown

#### HamburgBerlin Connection

    interface Serial0/1/1
    description HamburgBerlin
    ipv6 address FD01:01:01:40::8/64
    no shutdown

#### HamburgMuenchen Connection

    interface Serial0/2/0
    description HamburgMuenchen
    ipv6 address FD01:01:01:50::8/64
    no shutdown

### RT-HL-01

#### LuebeckHamburg Connection

    interface Serial0/1/0
    description LuebeckHamburg
    ipv6 address FD01:01:01:10::A/64
    no shutdown

#### LuebeckMuenchen Connection

    interface Serial0/1/1
    description LuebeckMuenchen
    ipv6 address FD01:01:01:20::A/64
    no shutdown

#### LuebeckBerlin Connection

    interface Serial0/2/0
    description LuebeckBerlin
    ipv6 address FD01:01:01:60::A/64
    no shutdown

## Standort Konfiguration

### München

#### RT-M-01 (RouterSwitch)

Aktiviere Terminal

    enable
    configure terminal

Router-Switch Schnitstelle

    interface GigabitEthernet0/0/0
    no shutdown
    ipv6 address 2001:DB8:D:99::1/64
    ipv6 address FE80:DB8:D:99::1 link-local

IPV6 Routing Statisch **ODER** OSPFv3

Statisch:

    ipv6 route ::/0 2001:DB8:D:99::2
    ipv6 route 2001:DB8:8:10::/64 FD01:01:01:50::8
    ipv6 route 2001:DB8:8:20::/64 FD01:01:01:50::8
    ipv6 route 2001:DB8:A:30::/64 FD01:01:01:20::A
    ipv6 route 2001:DB8:A:40::/64 FD01:01:01:20::A
    ipv6 route 2001:DB8:2:50::/64 FD01:01:01:30::2
    ipv6 route 2001:DB8:8:99::/64 FD01:01:01:50::8
    ipv6 route 2001:DB8:A:99::/64 FD01:01:01:20::A
    ipv6 route 2001:DB8:2:99::/64 FD01:01:01:30::2

OSPFv3:

    ipv6 router ospf 10
    router-id 1.1.4.1
    interface gig0/0/0
    ipv6 ospf 10 area 0
    interface se0/1/0
    ipv6 ospf 10 area 0
    interface se0/2/0
    ipv6 ospf 10 area 0
    interface se0/1/1
    ipv6 ospf 10 area 0


#### SW-M-01

Aktiviere Terminal

    enable
    configure terminal

Keine DNS Auflösung

    ipv6 unicast-routing
    no ip domain-lookup

Setze Routerport

    interface GigabitEthernet1/0/1
    no shutdown
    no switchport
    ipv6 address 2001:DB8:D:99::2/64
    ipv6 address FE80:DB8:D:99::2 link-local

Erstelle VLANs

    interface vlan 60
    ipv6 address 2001:DB8:D:60::1/64
    ipv6 address FE80:DB8:D:60::1 link-local

Schnittstellen VLAN Zuweisung

    interface GigabitEthernet1/0/2
    switchport mode access
    switchport access vlan 60

IPV6 Routing Statisch **ODER** OSPFv3

Statisch:

    ipv6 route 2001:DB8:8:10::/64 2001:DB8:D:99::1
    ipv6 route 2001:DB8:8:20::/64 2001:DB8:D:99::1
    ipv6 route 2001:DB8:8:99::/64 2001:DB8:D:99::1
    ipv6 route 2001:DB8:A:30::/64 2001:DB8:D:99::1
    ipv6 route 2001:DB8:A:40::/64 2001:DB8:D:99::1
    ipv6 route 2001:DB8:A:99::/64 2001:DB8:D:99::1
    ipv6 route 2001:DB8:2:50::/64 2001:DB8:D:99::1
    ipv6 route 2001:DB8:2:99::/64 2001:DB8:D:99::1

OSPFv3:

    ipv6 router ospf 10
    router-id 1.1.4.2
    interface gig1/0/1
    ipv6 ospf 10 area 0
    interface vlan 60
    ipv6 ospf 10 area 0


### Berlin

#### RT-B-01 (RouterSwitch)

Aktiviere Terminal

    enable
    configure terminal

Router-Switch Schnitstelle

    interface GigabitEthernet0/0/0
    no shutdown
    ipv6 address 2001:DB8:2:99::1/64
    ipv6 address FE80:DB8:2:99::1 link-local

IPV6 Routing Statisch **ODER** OSPFv3

Statisch:

    ipv6 route ::/0 2001:DB8:2:99::2
    ipv6 route 2001:DB8:8:10::/64 FD01:01:01:40::8
    ipv6 route 2001:DB8:8:20::/64 FD01:01:01:40::8
    ipv6 route 2001:DB8:A:30::/64 FD01:01:01:60::A
    ipv6 route 2001:DB8:A:40::/64 FD01:01:01:60::A
    ipv6 route 2001:DB8:D:60::/64 FD01:01:01:30::D
    ipv6 route 2001:DB8:A:99::/64 FD01:01:01:60::A
    ipv6 route 2001:DB8:8:99::/64 FD01:01:01:40::8
    ipv6 route 2001:DB8:D:99::/64 FD01:01:01:50::D

OSPFv3:

    ipv6 router ospf 10
    router-id 1.1.3.1
    interface gig0/0/0
    ipv6 ospf 10 area 0
    interface se0/1/0
    ipv6 ospf 10 area 0
    interface se0/2/0
    ipv6 ospf 10 area 0
    interface se0/1/1
    ipv6 ospf 10 area 0

#### SW-B-01

Aktiviere Terminal

    enable
    configure terminal

Keine DNS Auflösung

    ipv6 unicast-routing
    no ip domain-lookup

Setze Routerport

    interface GigabitEthernet1/0/1
    no shutdown
    no switchport
    ipv6 address 2001:DB8:2:99::2/64
    ipv6 address FE80:DB8:2:99::2 link-local

Erstelle VLANs

    interface vlan 50
    ipv6 address 2001:DB8:2:50::1/64
    ipv6 address FE80:DB8:2:50::1 link-local

Schnittstellen VLAN Zuweisung

    interface GigabitEthernet1/0/2
    switchport mode access
    switchport access vlan 50

IPV6 Routing Statisch **ODER** OSPFv3

Statisch:

    ipv6 route 2001:DB8:8:10::/64 2001:DB8:2:99::1
    ipv6 route 2001:DB8:8:20::/64 2001:DB8:2:99::1
    ipv6 route 2001:DB8:8:99::/64 2001:DB8:2:99::1
    ipv6 route 2001:DB8:A:30::/64 2001:DB8:2:99::1
    ipv6 route 2001:DB8:A:40::/64 2001:DB8:2:99::1
    ipv6 route 2001:DB8:A:99::/64 2001:DB8:2:99::1
    ipv6 route 2001:DB8:D:60::/64 2001:DB8:2:99::1
    ipv6 route 2001:DB8:D:99::/64 2001:DB8:2:99::1

OSPFv3:

    ipv6 router ospf 10
    router-id 1.1.3.2
    interface gig1/0/1
    description SW-B zu RT-B
    ipv6 ospf 10 area 0
    interface vlan 50
    ipv6 ospf 10 area 0

### Hamburg

#### RT-HH-01 (RouterSwitch)

Aktiviere Terminal

    enable
    configure terminal

Router-Switch Schnitstelle

    interface GigabitEthernet0/0/0
    no shutdown
    ipv6 address 2001:DB8:8:99::1/64
    ipv6 address FE80:DB8:8:99::1 link-local

IPV6 Routing Statisch **ODER** OSPFv3

Statisch:

    ipv6 route ::/0 2001:DB8:8:99::2
    ipv6 route 2001:DB8:A:30::/64 FD01:01:01:10::A
    ipv6 route 2001:DB8:A:40::/64 FD01:01:01:10::A
    ipv6 route 2001:DB8:A:99::/64 FD01:01:01:10::A
    ipv6 route 2001:DB8:D:60::/64 FD01:01:01:50::D
    ipv6 route 2001:DB8:D:99::/64 FD01:01:01:50::D
    ipv6 route 2001:DB8:2:50::/64 FD01:01:01:40::2
    ipv6 route 2001:DB8:2:99::/64 FD01:01:01:40::2

OSPFv3:

    ipv6 router ospf 10
    router-id 1.1.1.1
    interface gig0/0/0
    ipv6 router ospf 10 area 0
    interface se0/1/0
    ipv6 router ospf 10 area 0
    interface se0/2/0
    ipv6 router ospf 10 area 0
    interface se0/1/1
    ipv6 router ospf 10 area 0

#### SW-HH-01

Aktiviere Terminal

    enable
    configure terminal

Keine DNS Auflösung

    ipv6 unicast-routing
    no ip domain-lookup

Setze Routerport

    interface GigabitEthernet1/0/1
    no shutdown
    no switchport
    ipv6 address 2001:DB8:8:99::2/64
    ipv6 address FE80:DB8:8:99::2 link-local

Erstelle VLANs

    interface vlan 10
    ipv6 address 2001:DB8:8:10::1/64
    ipv6 address FE80:DB8:8:10::1 link-local

    interface vlan 20
    ipv6 address 2001:DB8:8:20::1/64
    ipv6 address FE80:DB8:8:20::1 link-local

Schnittstellen VLAN Zuweisung

    interface GigabitEthernet1/0/2
    switchport mode access
    switchport access vlan 10

    interface GigabitEthernet1/0/3
    switchport mode access
    switchport access vlan 20

IPV6 Routing Statisch **ODER** OSPFv3

Statisch:

    ipv6 route 2001:DB8:A:30::/64 2001:DB8:8:99::1
    ipv6 route 2001:DB8:A:40::/64 2001:DB8:8:99::1
    ipv6 route 2001:DB8:A:99::/64 2001:DB8:8:99::1
    ipv6 route 2001:DB8:2:50::/64 2001:DB8:8:99::1
    ipv6 route 2001:DB8:2:99::/64 2001:DB8:8:99::1
    ipv6 route 2001:DB8:D:60::/64 2001:DB8:8:99::1
    ipv6 route 2001:DB8:D:99::/64 2001:DB8:8:99::1

OSPFv3:

    ipv6 router ospf 10
    router-id 1.1.1.2
    interface gig1/0/1
    ipv6 ospf 10 area 0
    interface vlan 10
    ipv6 ospf 10 area 0
    interface vlan 20
    ipv6 ospf 10 area 0

### Lübeck

#### RT-HL-01 (RouterSwitch)

Aktiviere Terminal

    enable
    configure terminal

Router-Switch Schnitstelle

    interface GigabitEthernet0/0/0
    no shutdown
    ipv6 address 2001:DB8:A:99::1/64
    ipv6 address FE80:DB8:A:99::1 link-local

IPV6 Routing Statisch **ODER** OSPFv3

Statisch:

    ipv6 route ::/0 2001:DB8:A:99::2
    ipv6 route 2001:DB8:8:10::/64 FD01:01:01:10::8
    ipv6 route 2001:DB8:8:20::/64 FD01:01:01:10::8
    ipv6 route 2001:DB8:2:50::/64 FD01:01:01:60::2
    ipv6 route 2001:DB8:D:60::/64 FD01:01:01:20::D
    ipv6 route 2001:DB8:8:99::/64 FD01:01:01:10::8
    ipv6 route 2001:DB8:2:99::/64 FD01:01:01:60::2
    ipv6 route 2001:DB8:D:99::/64 FD01:01:01:20::D

OSPFv3:

    ipv6 router ospf 10
    router-id 1.1.2.1
    interface gig0/0/0
    ipv6 router ospf 10 area 0
    interface se0/1/0
    ipv6 router ospf 10 area 0
    interface se0/2/0
    ipv6 router ospf 10 area 0
    interface se0/1/1
    ipv6 router ospf 10 area 0

#### SW-HL-01

Aktiviere Terminal

    enable
    configure terminal

Keine DNS Auflösung

    ipv6 unicast-routing
    no ip domain-lookup

Setze Routerport

    interface GigabitEthernet1/0/1
    no shutdown
    no switchport
    ipv6 address 2001:DB8:A:99::2/64
    ipv6 address FE80:DB8:A:99::2 link-local

Erstelle VLANs

    interface vlan 30
    ipv6 address 2001:DB8:A:30::1/64
    ipv6 address FE80:DB8:A:30::1 link-local

    interface vlan 40
    ipv6 address 2001:DB8:A:40::1/64
    ipv6 address FE80:DB8:A:40::1 link-local

Schnittstellen VLAN Zuweisung

    interface GigabitEthernet1/0/2
    switchport mode access
    switchport access vlan 30

    interface GigabitEthernet1/0/3
    switchport mode access
    switchport access vlan 40

IPV6 Routing Statisch **ODER** OSPFv3

Statisch:

    ipv6 route 2001:DB8:8:10::/64 2001:DB8:A:99::1
    ipv6 route 2001:DB8:8:20::/64 2001:DB8:A:99::1
    ipv6 route 2001:DB8:8:99::/64 2001:DB8:A:99::1
    ipv6 route 2001:DB8:2:50::/64 2001:DB8:A:99::1
    ipv6 route 2001:DB8:2:99::/64 2001:DB8:A:99::1
    ipv6 route 2001:DB8:D:60::/64 2001:DB8:A:99::1
    ipv6 route 2001:DB8:D:99::/64 2001:DB8:A:99::1

OSPFv3:

    ipv6 router ospf 10
    router-id 1.1.2.2
    interface gig1/0/1
    ipv6 ospf 10 area 0
    interface vlan 30
    ipv6 ospf 10 area 0
    interface vlan 40
    ipv6 ospf 10 area 0

## Banner erstellen

### Alle Router/Switches

Befehle:

    enable
    configure terminal
    banner motd #********************************************
    *                                          *
    *          Willkommen im Netzwerk!         *
    *                                          *
    *        Unautorisierter Zugang verboten.  *
    *                                          *
    *         Bitte geben Sie das Passwort     *
    *               ein.                       *
    *                                          *
    ********************************************#

## Passwort Konfiguration

### Hamburg

#### RT-HH-01

Aktiviere Terminal

    enable
    configure terminal

Passwort Einrichtung

    line con 0
    password yf4Xvwmy7dF2JQwE
    login
    exit

#### SW-HH-01

Aktiviere Terminal

    enable
    configure terminal

Passwort Einrichtung

    line con 0
    password bxJxE9erFTXn8eHb
    login
    exit

### Lübeck

#### RT-HL-01

Aktiviere Terminal

    enable
    configure terminal

Passwort Einrichtung

    line con 0
    password ezX64jyk7MXJsjm8
    login
    exit

#### SW-HL-01

Aktiviere Terminal

    enable
    configure terminal

Passwort Einrichtung

    line con 0
    password T85NtxJ6C3E2hda3
    login
    exit

### Berlin

#### RT-B-01

Aktiviere Terminal

    enable
    configure terminal

Passwort Einrichtung

    line con 0
    password bxRn5j2CuKyq7RVD
    login
    exit

#### SW-B-01

Aktiviere Terminal

    enable
    configure terminal

Passwort Einrichtung

    line con 0
    password QVrSHsb79ANNmbeU
    login
    exit

### München

#### RT-M-01

Aktiviere Terminal

    enable
    configure terminal

Passwort Einrichtung

    line con 0
    password ctLFAsuyfbGtES5C
    login
    exit

#### SW-M-01

Aktiviere Terminal

    enable
    configure terminal

Passwort Einrichtung

    line con 0
    password zVJZaXawsTKVSvuk
    login
    exit

## SSH Zugänge

### RT-HH-01

Aktiviere Terminal

    enable
    configure terminal

Setze Hostname & SSH User

    hostname RT-HH-01
    username RouterHamburg password 6TDU3UnsHjCYXKgz
    enable password yf4Xvwmy7dF2JQwE
    ip domain-name diehamburg.com
    crypto key generate rsa general-keys modulus 1024
    line vty 0 4
    login local
    transport input ssh

### SW-HH-01

Aktiviere Terminal

    enable
    configure terminal

Setze Hostname & SSH User

    hostname SW-HH-01
    username SwitchHamburg password aSXr8d2SHB6RKL6n
    enable password bxJxE9erFTXn8eHb
    ip domain-name diehamburg.com
    crypto key generate rsa general-keys modulus 1024
    line vty 0 4
    login local
    transport input ssh

### RT-HL-01

Aktiviere Terminal

    enable
    configure terminal

Setze Hostname & SSH User

    hostname RT-HL-01
    username RouterLuebeck password Hu5kc9URzjcd6WeN
    enable password ezX64jyk7MXJsjm8
    ip domain-name diehamburg.com
    crypto key generate rsa general-keys modulus 1024
    line vty 0 4
    login local
    transport input ssh

### SW-HL-01

Aktiviere Terminal

    enable
    configure terminal

Setze Hostname & SSH User

    hostname SW-HL-01
    username SwitchLuebeck password M4Qw4E7DbPDrkXbT
    enable password T85NtxJ6C3E2hda3
    ip domain-name diehamburg.com
    crypto key generate rsa general-keys modulus 1024
    line vty 0 4
    login local
    transport input ssh

### RT-B-01

Aktiviere Terminal

    enable
    configure terminal

Setze Hostname & SSH User

    hostname RT-B-01
    username RouterBerlin password zDSb4n5HQxSvXmXT
    enable password bxRn5j2CuKyq7RVD
    ip domain-name diehamburg.com
    crypto key generate rsa general-keys modulus 1024
    line vty 0 4
    login local
    transport input ssh

### SW-B-01

Aktiviere Terminal

    enable
    configure terminal

Setze Hostname & SSH User

    hostname SW-B-01
    username SwitchBerlin password xqSCnYcrnZgyHjs2
    enable password QVrSHsb79ANNmbeU
    ip domain-name diehamburg.com
    crypto key generate rsa general-keys modulus 1024
    line vty 0 4
    login local
    transport input ssh

### RT-M-01

Aktiviere Terminal

    enable
    configure terminal

Setze Hostname & SSH User

    hostname RT-M-01
    username RouterMuenchen password XKsVvr3w2jP5A3Ub
    enable password ctLFAsuyfbGtES5C
    ip domain-name diehamburg.com
    crypto key generate rsa general-keys modulus 1024
    line vty 0 4
    login local
    transport input ssh

### SW-M-01

Aktiviere Terminal

    enable
    configure terminal

Setze Hostname & SSH User

    hostname SW-M-01
    username SwitchMuenchen password yhpYtsCy7Uh3S3vt
    enable password zVJZaXawsTKVSvuk
    ip domain-name diehamburg.com
    crypto key generate rsa general-keys modulus 1024
    line vty 0 4
    login local
    transport input ssh

## ACL Konfiguration

### RT-HH-01 / RT-HL-01 (ACL)

Setze die ACL Liste auf die Serial Schnittstellen

    interface serial0/1/0
    ipv6 traffic-filter ClientRouterACL in
    interface serial0/1/1
    ipv6 traffic-filter ClientRouterACL in
    interface serial0/2/0
    ipv6 traffic-filter ClientRouterACL in

Access Liste bearbeiten

    ipv6 access-list ClientRouterACL

SSH nur für Hamburg erlauben

    permit tcp 2001:DB8:8::/48 any eq 22
    deny tcp any any eq 22

Andere TCP und IPv6 Protokolle für alle erlauben

    permit tcp any any
    permit ipv6 any any

### RT-B-01 / RT-M-01 (ACL)

Setze die ACL Liste auf die Serial Schnittstellen

    interface serial0/1/0
    ipv6 traffic-filter ServerRouterACL in
    interface serial0/1/1
    ipv6 traffic-filter ServerRouterACL in
    interface serial0/2/0
    ipv6 traffic-filter ServerRouterACL in

Access Liste bearbeiten

    ipv6 access-list ServerRouterACL

SSH nur für Hamburg erlauben

    permit tcp 2001:DB8:8::/48 any eq 22
    deny tcp any any eq 22

Http nur für Hamburg erlauben

    permit tcp 2001:DB8:8::/48 any eq 80
    deny tcp any any eq 80

Ping nur für Hamburg erlauben

    permit icmp 2001:DB8:8::/48 any
    deny icmp any any

Andere TCP und IPv6 Protokolle für alle erlauben

    permit tcp any any
    permit ipv6 any any

### SW-HH-01 / SW-HL-01 / SW-B-01 / SW-M-01 (ACL)

> Funktioniert nicht im Packet Tracer. Müsste aber theoretisch funktionieren.

Setze die ACL Liste auf die Serial Schnittstellen

    interface range gig1/0/1 - 24
    ipv6 traffic-filter GlobalSwitchACL in

Access Liste bearbeiten

    ipv6 access-list GlobalSwitchACL

SSH nur für Hamburg erlauben

    permit tcp 2001:DB8:8::/48 any eq 22
    deny tcp any any eq 22

Andere TCP und IPv6 Protokolle für alle erlauben

    permit tcp any any
    permit ipv6 any any
