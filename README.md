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

VLAN 60 Trunk

    interface GigabitEthernet0/0/0.60
    encapsulation dot1Q 60
    ipv6 address 2001:DB8:D:60::1/64
    ipv6 address FE80:DB8:D:60::1 link-local

VLAN 99 Trunk

    interface GigabitEthernet0/0/0.99
    encapsulation dot1Q 99
    ipv6 address 2001:DB8:D:99::1/64
    ipv6 address FE80:DB8:D:99::1 link-local

    interface GigabitEthernet0/0/0
    no shutdown

IPV6 Routing

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

Setze Trunk Ports

    interface GigabitEthernet1/0/1
    switchport mode trunk
    switchport trunk allowed vlan 60,99

Erstelle VLANs

    interface vlan 60

    interface vlan 99
    ipv6 address 2001:DB8:D:99::2/64

Schnittstellen VLAN Zuweisung

    interface GigabitEthernet1/0/2
    switchport mode access
    switchport access vlan 60

### Berlin

#### RT-B-01 (RouterSwitch)

Aktiviere Terminal

    enable
    configure terminal

VLAN 50 Trunk

    interface GigabitEthernet0/0/0.50
    encapsulation dot1Q 50
    ipv6 address 2001:DB8:2:50::1/64
    ipv6 address FE80:DB8:2:50::1 link-local

VLAN 99 Trunk

    interface GigabitEthernet0/0/0.99
    encapsulation dot1Q 99
    ipv6 address 2001:DB8:2:99::1/64
    ipv6 address FE80:DB8:2:99::1 link-local

    interface GigabitEthernet0/0/0
    no shutdown

IPV6 Routing

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

Setze Trunk Ports

    interface GigabitEthernet1/0/1
    switchport mode trunk
    switchport trunk allowed vlan 50,99

Erstelle VLANs

    interface vlan 50

    interface vlan 99
    ipv6 address 2001:DB8:2:99::2/64

Schnittstellen VLAN Zuweisung

    interface GigabitEthernet1/0/2
    switchport mode access
    switchport access vlan 50

### Hamburg

#### RT-HH-01 (RouterSwitch)

Aktiviere Terminal

    enable
    configure terminal

VLAN 10 Trunk

    interface GigabitEthernet0/0/0.10
    encapsulation dot1Q 10
    ipv6 address 2001:DB8:8:10::1/64
    ipv6 address FE80:DB8:8:10::1 link-local

VLAN 20 Trunk

    interface GigabitEthernet0/0/0.20
    encapsulation dot1Q 20
    ipv6 address 2001:DB8:8:20::1/64
    ipv6 address FE80:DB8:8:20::1 link-local

VLAN 99 Trunk

    interface GigabitEthernet0/0/0.99
    encapsulation dot1Q 99
    ipv6 address 2001:DB8:8:99::1/64
    ipv6 address FE80:DB8:8:99::1 link-local

    interface GigabitEthernet0/0/0
    no shutdown

IPV6 Routing

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

Setze Trunk Ports

    interface GigabitEthernet1/0/1
    switchport mode trunk
    switchport trunk allowed vlan 10,20,99

Erstelle VLANs

    interface vlan 10
    exit

    interface vlan 20
    exit

    interface vlan 99
    ipv6 address 2001:DB8:8:99::2/64
    exit

Schnittstellen VLAN Zuweisung

    interface GigabitEthernet1/0/2
    switchport mode access
    switchport access vlan 10

    interface GigabitEthernet1/0/3
    switchport mode access
    switchport access vlan 20

    interface GigabitEthernet1/0/4
    switchport mode access
    switchport access vlan 99

### Lübeck

#### RT-HL-01 (RouterSwitch)

Aktiviere Terminal

    enable
    configure terminal

VLAN 30 Trunk

    interface GigabitEthernet0/0/0.30
    encapsulation dot1Q 30
    ipv6 address 2001:DB8:A:30::1/64
    ipv6 address FE80:DB8:A:30::1 link-local

VLAN 40 Trunk

    interface GigabitEthernet0/0/0.40
    encapsulation dot1Q 40
    ipv6 address 2001:DB8:A:40::1/64
    ipv6 address FE80:DB8:A:40::1 link-local

VLAN 99 Trunk

    interface GigabitEthernet0/0/0.99
    encapsulation dot1Q 99
    ipv6 address 2001:DB8:A:99::1/64
    ipv6 address FE80:DB8:A:99::1 link-local

    interface GigabitEthernet0/0/0
    no shutdown

IPV6 Routing

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

Setze Trunk Ports

    interface GigabitEthernet1/0/1
    switchport mode trunk
    switchport trunk allowed vlan 30,40,99

Erstelle VLANs

    interface vlan 30
    exit

    interface vlan 40
    exit

    interface vlan 99
    ipv6 address 2001:DB8:A:99::2/64
    exit

Schnittstellen VLAN Zuweisung

    interface GigabitEthernet1/0/2
    switchport mode access
    switchport access vlan 30

    interface GigabitEthernet1/0/3
    switchport mode access
    switchport access vlan 40
