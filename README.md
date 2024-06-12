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
    <!-- ipv6 route ::/0 2001:DB8:D:60::2 -->


    interface GigabitEthernet0/0/0
    no shutdown

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
    switchport trunk allowed vlan 60

Erstelle VLANsork

    interface vlan 60
    ipv6 address 2001:DB8:D:60::2/64

Schnittstellen VLAN Zuweisung

    interface GigabitEthernet1/0/2
    switchport mode access
    switchport access vlan 60
