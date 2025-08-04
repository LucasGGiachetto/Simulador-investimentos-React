import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const InvestmentSimulator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState<string>('');
  const [months, setMonths] = useState<string>('');
  const [interestRate, setInterestRate] = useState<string>('');
  const [totalWithoutInterest, setTotalWithoutInterest] = useState<number>(0);
  const [totalWithInterest, setTotalWithInterest] = useState<number>(0);

  const calculateInvestment = () => {
    const investment = parseFloat(monthlyInvestment) || 0;
    const numMonths = parseInt(months) || 0;
    const rate = parseFloat(interestRate) / 100 || 0;

    // Cálculo sem juros
    const totalNoInterest = investment * numMonths;
    setTotalWithoutInterest(totalNoInterest);

    // Cálculo com juros compostos
    let totalWithCompoundInterest = 0;
    for (let i = 1; i <= numMonths; i++) {
      totalWithCompoundInterest += investment * Math.pow(1 + rate, i);
    }
    setTotalWithInterest(totalWithCompoundInterest);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simulador de Investimentos</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Investimento mensal:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o valor"
          keyboardType="numeric"
          value={monthlyInvestment}
          onChangeText={setMonthlyInvestment}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Número de meses:</Text>
        <TextInput
          style={styles.input}
          placeholder="Quantos meses deseja investir"
          keyboardType="numeric"
          value={months}
          onChangeText={setMonths}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Taxa de juros ao mês:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a taxa de juros"
          keyboardType="numeric"
          value={interestRate}
          onChangeText={setInterestRate}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={calculateInvestment}>
        <Text style={styles.buttonText}>Simular</Text>
      </TouchableOpacity>

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>
          Valor total sem juros: R$ {totalWithoutInterest.toFixed(2)}
        </Text>
        <Text style={styles.resultText}>
          Valor total com juros compostos: R$ {totalWithInterest.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  resultContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#e9f7ef',
    borderRadius: 5,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
});

export default InvestmentSimulator;