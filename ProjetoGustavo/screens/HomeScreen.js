import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Seção principal */}
      <View style={styles.intro}>
        <Image
          source={{
            uri: 'https://img.freepik.com/vetores-premium/cartoon-de-menino-com-design-de-laptop-comunicacao-de-tecnologia-digital-midias-sociais-internet-e-tema-da-web-ilustracao-vetorial_1142-154370.jpg',
          }}
          style={styles.introImage}
        />
        <Text style={styles.introHeading}>Olá</Text>
        <Text style={styles.introText}>
          Sou o Gustavo, empreendedor digital e acadêmico de Análise e Desenvolvimento de Sistemas.
        </Text>
      </View>

      {/* Marcas */}
      <View style={styles.brandsSection}>
        <Text style={styles.brandsHeading}>Alguns dos marketplaces com que trabalho:</Text>
        <View style={styles.brands}>
          <Image
            source={{
              uri: 'https://seeklogo.com/images/M/mercado-livre-logo-D1DC52B13E-seeklogo.com.png',
            }}
            style={styles.brandImage}
          />
          <Image
            source={{
              uri: 'https://img.icons8.com/color/512/shopee.png',
            }}
            style={styles.brandImage}
          />
          <Image
            source={{
              uri: 'https://img.icons8.com/color/512/magazine-luiza.png',
            }}
            style={styles.brandImage}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  intro: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  introImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  introHeading: {
    marginTop: 15,
    fontSize: 24,
    fontWeight: 'bold',
  },
  introText: {
    marginTop: 10,
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
  },
  brandsSection: {
    backgroundColor: '#f4f4f4',
    paddingVertical: 40,
    alignItems: 'center',
  },
  brandsHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  brands: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  brandImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
});
