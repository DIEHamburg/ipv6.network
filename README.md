# ipv6.network

IPv6 Networking

## Statische Router Config

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

IPV6 Routing

    ipv6 route ::/0 2001:DB8:D:99::2
    ipv6 route 2001:DB8:8:10::/64 FD01:01:01:50::8
    ipv6 route 2001:DB8:8:20::/64 FD01:01:01:50::8
    ipv6 route 2001:DB8:A:30::/64 FD01:01:01:20::A
    ipv6 route 2001:DB8:A:40::/64 FD01:01:01:20::A
    ipv6 route 2001:DB8:2:50::/64 FD01:01:01:30::2
    ipv6 route 2001:DB8:8:99::/64 FD01:01:01:50::8
    ipv6 route 2001:DB8:A:99::/64 FD01:01:01:20::A
    ipv6 route 2001:DB8:2:99::/64 FD01:01:01:30::2

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

IPV6 Routing

    ipv6 route 2001:DB8:8:10::/64 2001:DB8:D:99::1
    ipv6 route 2001:DB8:8:20::/64 2001:DB8:D:99::1
    ipv6 route 2001:DB8:8:99::/64 2001:DB8:D:99::1
    ipv6 route 2001:DB8:A:30::/64 2001:DB8:D:99::1
    ipv6 route 2001:DB8:A:40::/64 2001:DB8:D:99::1
    ipv6 route 2001:DB8:A:99::/64 2001:DB8:D:99::1
    ipv6 route 2001:DB8:2:50::/64 2001:DB8:D:99::1
    ipv6 route 2001:DB8:2:99::/64 2001:DB8:D:99::1

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

IPV6 Routing

    ipv6 route ::/0 2001:DB8:2:99::2
    ipv6 route 2001:DB8:8:10::/64 FD01:01:01:40::8
    ipv6 route 2001:DB8:8:20::/64 FD01:01:01:40::8
    ipv6 route 2001:DB8:A:30::/64 FD01:01:01:60::A
    ipv6 route 2001:DB8:A:40::/64 FD01:01:01:60::A
    ipv6 route 2001:DB8:D:60::/64 FD01:01:01:30::D
    ipv6 route 2001:DB8:A:99::/64 FD01:01:01:60::A
    ipv6 route 2001:DB8:8:99::/64 FD01:01:01:40::8
    ipv6 route 2001:DB8:D:99::/64 FD01:01:01:50::D

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

IPV6 Routing

    ipv6 route 2001:DB8:8:10::/64 2001:DB8:2:99::1
    ipv6 route 2001:DB8:8:20::/64 2001:DB8:2:99::1
    ipv6 route 2001:DB8:8:99::/64 2001:DB8:2:99::1
    ipv6 route 2001:DB8:A:30::/64 2001:DB8:2:99::1
    ipv6 route 2001:DB8:A:40::/64 2001:DB8:2:99::1
    ipv6 route 2001:DB8:A:99::/64 2001:DB8:2:99::1
    ipv6 route 2001:DB8:D:60::/64 2001:DB8:2:99::1
    ipv6 route 2001:DB8:D:99::/64 2001:DB8:2:99::1

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

IPV6 Routing

    ipv6 route ::/0 2001:DB8:8:99::2
    ipv6 route 2001:DB8:A:30::/64 FD01:01:01:10::A
    ipv6 route 2001:DB8:A:40::/64 FD01:01:01:10::A
    ipv6 route 2001:DB8:A:99::/64 FD01:01:01:10::A
    ipv6 route 2001:DB8:D:60::/64 FD01:01:01:50::D
    ipv6 route 2001:DB8:D:99::/64 FD01:01:01:50::D
    ipv6 route 2001:DB8:2:50::/64 FD01:01:01:40::2
    ipv6 route 2001:DB8:2:99::/64 FD01:01:01:40::2

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

IPV6 Routing

    ipv6 route 2001:DB8:A:30::/64 2001:DB8:8:99::1
    ipv6 route 2001:DB8:A:40::/64 2001:DB8:8:99::1
    ipv6 route 2001:DB8:A:99::/64 2001:DB8:8:99::1
    ipv6 route 2001:DB8:2:50::/64 2001:DB8:8:99::1
    ipv6 route 2001:DB8:2:99::/64 2001:DB8:8:99::1
    ipv6 route 2001:DB8:D:60::/64 2001:DB8:8:99::1
    ipv6 route 2001:DB8:D:99::/64 2001:DB8:8:99::1

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

IPV6 Routing

    ipv6 route ::/0 2001:DB8:A:99::2
    ipv6 route 2001:DB8:8:10::/64 FD01:01:01:10::8
    ipv6 route 2001:DB8:8:20::/64 FD01:01:01:10::8
    ipv6 route 2001:DB8:2:50::/64 FD01:01:01:60::2
    ipv6 route 2001:DB8:D:60::/64 FD01:01:01:20::D
    ipv6 route 2001:DB8:8:99::/64 FD01:01:01:10::8
    ipv6 route 2001:DB8:2:99::/64 FD01:01:01:60::2
    ipv6 route 2001:DB8:D:99::/64 FD01:01:01:20::D

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

IPV6 Routing

    ipv6 route 2001:DB8:8:10::/64 2001:DB8:A:99::1
    ipv6 route 2001:DB8:8:20::/64 2001:DB8:A:99::1
    ipv6 route 2001:DB8:8:99::/64 2001:DB8:A:99::1
    ipv6 route 2001:DB8:2:50::/64 2001:DB8:A:99::1
    ipv6 route 2001:DB8:2:99::/64 2001:DB8:A:99::1
    ipv6 route 2001:DB8:D:60::/64 2001:DB8:A:99::1
    ipv6 route 2001:DB8:D:99::/64 2001:DB8:A:99::1

## Banner erstellen

### Hamburg

#### RT-HH-01

In der Cli

    enable
    configure terminal
    banner login #Unautorisierter Zugang verboten. Bitte geben sie das Passwort ein.#
    exit

#### SW-HH-01

In der Cli

    enable
    configure terminal
    banner login #Unautorisierter Zugang verboten. Bitte geben sie das Passwort ein.#
    exit

### Lübeck

#### RT-HL-01

In der Cli

    enable
    configure terminal
    banner login #Unautorisierter Zugang verboten. Bitte geben sie das Passwort ein.#
    exit

#### SW-HL-01

In der Cli

    enable
    configure terminal
    banner login #Unautorisierter Zugang verboten. Bitte geben sie das Passwort ein.#
    exit

### Berlin

#### RT-B-01

In der Cli

    enable
    configure terminal
    banner login #Unautorisierter Zugang verboten. Bitte geben sie das Passwort ein.#
    exit

#### SW-B-01

In der Cli

    enable
    configure terminal
    banner login #Unautorisierter Zugang verboten. Bitte geben sie das Passwort ein.#
    exit

### München

#### RT-M-01

In der Cli

    enable
    configure terminal
    banner login #Unautorisierter Zugang verboten. Bitte geben sie das Passwort ein.#
    exit

#### SW-M-01

In der Cli

    enable
    configure terminal
    banner login #Unautorisierter Zugang verboten. Bitte geben sie das Passwort ein.#
    exit


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
    ip domain-name diehamburg.com
    crypto key generate rsa general-keys modulus 1024
    line vty 0 4
    login local
    transport input ssh

## ACL

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

Http nur für Hamburg

    permit tcp 2001:DB8:8::/48 any eq 80
    deny tcp any any eq 80

Andere TCP und IPv6 Protokolle für alle erlauben

    permit tcp any any
    permit ipv6 any any

### SW-HH-01 / SW-HL-01 / SW-B-01 / SW-M-01 (ACL)

Setze die ACL Liste auf die Serial Schnittstellen

    interface range gig1/0/1 - gig1/1/4
    ipv6 traffic-filter GlobalSwitchACL in

Access Liste bearbeiten

    ipv6 access-list GlobalSwitchACL

SSH nur für Hamburg erlauben

    permit tcp 2001:DB8:8::/48 any eq 22
    deny tcp any any eq 22

Andere TCP und IPv6 Protokolle für alle erlauben

    permit tcp any any
    permit ipv6 any any
