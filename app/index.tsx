import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { Stack, useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Configuração da barra superior com o título "iphone" */}
      <Stack.Screen options={{ title: 'iphone' }} />

      {/* Logo */}
      <Image
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAAD8/PwEBAT5+fkICAjy8vLp6enm5ube3t5LS0t9fX1aWlrw8PDk5OS3t7eYmJgiIiKEhIRxcXE3NzeNjY2goKC+vr7JyckODg5ISEi4uLhjY2NPT0+vr6+SkpIaGho+Pj4rKyvV1dWfn59ra2suLi5+fn4eHh7FxcV0dHRCQkJ/4vcTAAAJvklEQVR4nO1diXrqKhAmgFk0atz3/bS3te//fpclsfZUwwSFxPPN312bhB8GmA0gBIFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCMQ/A0r1p/hGxM/iVf1W/g4tuf4VIGnwnATloUTxJ+GK/4tDMaBhMu9nw9E63Wzam026Hg2z/jwJefEPLwpddpr0J+vxIviNxXg96SevSJDqT1n0eNYZf1NiN2gG484qurqq5rIDoYcV0tumt5ruRmOm215x4StQ1KNjOBsNVLux2013aVbG5PuD0axbXNp4yAEymrY1PaY4ljBk+X8FwXIayWG37uIDQEm0O97rdbca8fL9OInqLnwZVB+SQtYbwrjdxLB3daeGgQoBE6XqZgNw+/1uT9EhM9kfhag3kaEs2Kxt6HjlFOWl7RlvZhvKMsUj3aVYy4pgKx95R3HjCCrNjND+4FvaHsKgr/X0htGMOo8Su0InbhZBWZh5+/G2u4AF7TnhjaJI+4vgCeJ5ISg6Zb9JGg7lWVBM289hKO+U8UYQVANC+PYkaj/xFnLeCFGlUeqEYBCkUQOGG9FVeunzeuA1xD3TXv0MiSJoN8ObGIq7pnHNDKkSUWUCPZ+g+tKCWhNN9ehu6qYBc7SCtMvrnPwpH7npgzmkdIx4fQTFjJw9YkpAKIqvrL6Zn5K+0RHzKEFZf/162Ml6PcF8abdKXnw7tsz1s5jX4GZUXSNeWhLM6b2fV0m8AYhAu+efomxC/p+1fErZG0/lXMcB+hALOrmPxCO4+Fg9Mk+0OpFyj/INpEJEV/Q+3FAa7y0nCiZq5viZ3yYaQy4IPrzrNqIfnm3Y5cNju1fcKNnDLjv7nhQpmdkRVH3wEF8M+C30splXfoJhF9J/bkKI6OlbDxtBL9t0Pctp9sA8P/2Oi8YD8FWZN24q+C5KZs3wLWcnBTWDxzcGsTcrQ84UwwdswlNeTNGO0R7q3RFPG3rzvsmSPeB3GhUzm/gxgd5EPc1nZGrygEnxWWhglHzCXZDycRNf9EQTvhdhzYoQ1wykkOvQSzKGy4F83rFHfAVQpxbkimKuZZCYy1hv8lX1+qkfepSE1jaFYJipJhQ4jStrfcvQ01DzaUtQYqsqifDtwELS/Sg2VOghlqMMuxRyLn2srVa1GYcFbz7aUAwQYD2EKVz+UAPitNubZ+/BDwlljMEadJB4oEjhynJR5sXi8kIr2B8/5K+q9faH5df4gwVAbw+TMu6jI6YVhPQjnWxPp2S+nWyu5j75Y59OPntRtxsl8+kIOOiwIPXAj8QtMMNxllwmMH7ajXUp5dVfu9N1Y0T9JYCjaOiFe72GkhVUnxlMVXZlEeYXJGdvyt79GM35lWtJ/cJXX+YUMeVZdC2mlHQAKql8/xwRfhXj1NpoNMv+fMbkZ1qpDvZGQ1PVSfdHx31HpAcQw8W0xNa58bJQcvg0KM9Tkc89uB9pEgO5nOD2VloTVQrbbd+nfO2P8b5BkLilJ4oxA3VDTfB3I9J7eTLKAUt2pVanCuKt3DIk0qQzVrRQPiunbSnPAQnbxrqbuLUvRCnWxjII+8HC3yAvSM7mKMbabQoqJyHAgztIqpeCi9pL2oBJcRw6dX5zkhjDTSzYUVI59U7UiTCnmLkNF25VU0rm5iYc9y5zfJVbRweYrjR3PCMC1O6JTSiM8jVQVXIdL83MRThZVfIUavFnjqV0aCzBxiqDOX4H0Quk29Qtw7OxpidWnmkx1wN9GiPHE2L5dCg1knn1cVRgAXbArt0ONIagNFOe6cpSqoZoKMPUbVJmaAyqDSovXqKkgntf9PPQETcNM8MNsZgsaIX8zXbdDN9shDSs4B2unaGVER7BA6X1S6nVdNWrkFzlmKE5wWdiwzAGZmRIpG7jT2bz0IIhJd1jUxiadBqm+2FljrxCNMutTmPSS1tyLLWx7iusKHKrl5psC6bmQwsx3cJDba6zToz24Xt1Hw3XqQ9Ahm7tQ6ONL0oZVte8xQfU/nVt40P8NIlVtuu8BdRqHPtpIL42GeS1KMMZmII0dhvLh/hLd3Yl6AFTT9aOU2m52edtZ7+pqB0EVjpTJcwCw8C+j2wqmathmpVGEL3ELSCxp5lVLXMi16GWV56H2JMsiTF+aKd0yGs+l5rHndv7iR8CYsAHq8iCigREw1bRVncYuo8BFyuBykRpblkIGUBNlverT4qw+zi+sMcX5U3IgrPtlghyIjjcrz+ZixE/mc1NGPNpjrEdQxVCDEp0Gz/5NConykBxai9KZdOtp5woSnsGt5EY8CxtVGFjHFVq2D14yWsjBJCbuLKaL4Rsl+bmMmHf+8kvNSyXEfSXNo0oCHYP5bf2lV/aLfWqKN3KRq8xNaFzZ/AVSjN7VErpJrJgSCJD5vcfB1xulyQ+liiQLaXy6MLAhVXZRCVuLs+5+oD1FoMTqWQIy2TFU4lfWK238Li2y7hmhgVrTqvE2SjhvESVUE/ztu8QZN2TklNeIXGI0/JchZa2WbwQBK1dk0J1qrJHICen0lVeau2a17XAgPWHh+hvhsV+u39Dtk1UYlQohv7WH+oyQdaQnkNYBq3KoDItK/a9hpRSyDrg3Y2Ocyd7dmdS52eeV6tD1nKLwWEL87sB0uO9r+Uu1uMbbGG5yqkomE5kn5zX6/NkFhX56zrHbxuUNSGTDjzfe0UWeyoYh5tOpFJHVTpC/3vX3dZ6Fqp6UitSTeIgfYi+d41QadkdE0H59nKrFoGESaaVzouraTNNQjnPx9MvQx9U+2L4U9hyhrJGI2NWtlwhEYzPu11ns9d/5vqs4vmxeRt21n+t8rqFdlys1/BJUT5wDkgYvl679tcrP9+4D7k/jX+GiqW3PYZqIKfAPewTxdSsWtcO0TTf68thGzK1fr8mflrLDN3u18aCtEvr3MnU5Z57OcH6N4fkkdo30QFDtW+ihb/n2QSp2tzTRROyZmzvSYUh727/0m4Ddtp1ugdttzFbXrvZR3jXnK3npSg9fS/oRb9Z53nw5+7n3ZL7eTeInl7/Gf/Le7Ln1tTqufvqWyWPuURxNgLTVqEFGnw2gsT1+Ra2jZifb/EKZ5TYo+lnlMhyxeYlivcxjPPD5hrI8ALRHSf6rCCm48EGL1PxIdpvEjdtcLkJtYvHVGeoGe2qH+c9xc1uugt0Mbv6zC4TxZ9ndjVtDryHQtuqfO6axTL+WpBP1aqo0eo/U174j7PzXoHfL5Sff7h6yfMPf0CJHf8+w7Ldbv87Z1hqXM9tl3NI6e/3XhW6U/72RdCrF1+dIwKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEIgr/A+liXBJjeKfOwAAAABJRU5ErkJggg=='
        }}
        style={styles.logo}
      />

      {/* Títulos e Slogan */}
      <View style={styles.textGroup}>
        <Text style={styles.title}>iphone</Text>
        <Text style={styles.slogan}>Transformando vidas através da tecnologia</Text>
      </View>

      {/* Botões de Ação */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push('/home')}
      >
        <Text style={styles.buttonText}>Conhecer Projetos</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Alert.alert('Aviso', 'Indo para o login...')}>
        <Text style={styles.linkText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 30,
  },
  textGroup: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    letterSpacing: 1,
  },
  slogan: {
    fontSize: 18,
    textAlign: 'center',
    fontStyle: 'italic',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 15,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#007AFF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});