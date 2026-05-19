import React from 'react';
import { Text, Group, Box } from '@mantine/core';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactIconsList() {
  return (
    <Box>
      <Group wrap="nowrap" mt="lg">
        <Phone size={20} style={{ color: 'white' }} />
        <Text size="sm" c="white">
          +63 956-390-155
        </Text>
      </Group>
      <Group wrap="nowrap" mt="md">
        <Mail size={20} style={{ color: 'white' }} />
        <Text size="sm" c="white">
            lunabachristianlee019@gmail.com
        </Text>
      </Group>
      <Group wrap="nowrap" mt="md">
        <MapPin size={20} style={{ color: 'white' }} />
        <Text size="sm" c="white">
          Paranaque, Philippines
        </Text>
      </Group>
      <Group wrap="nowrap" mt="md">
        <Clock size={20} style={{ color: 'white' }} />
        <Text size="sm" c="white">
          8 a.m. – 11 p.m.
        </Text>
      </Group>
    </Box>
  );
}