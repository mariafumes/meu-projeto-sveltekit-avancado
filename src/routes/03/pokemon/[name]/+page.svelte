<script>
    let { data } = $props();
  </script>
  
  <div class="container my-5">
    <div class="row g-4 justify-content-center">
      <div class="col-md-7 col-lg-5">
        <div class="card shadow-lg border-0 rounded-4 overflow-hidden">
          <div class="row g-0">
            <div class="col-md-5 bg-light d-flex align-items-center justify-content-center p-3">
              <img src={data.pokemon.image} alt={data.pokemon.name} class="img-fluid rounded" style="max-height: 300px;" />
            </div>
  
        
            <div class="col-md-7 p-4 bg-light">
              <h2 class="text-dark text-capitalize">
                {data.pokemon.name} <span class="text-muted">#{data.pokemon.id}</span>
              </h2>
  
              <div class="mb-3">
                <span class="md-block"><strong>Altura:</strong> {data.pokemon.height / 10} m</span>
                <span class="md-block"><strong>Peso:</strong> {data.pokemon.weight / 10} kg</span>
              </div>
  
              <div class="mb-3">
                <strong>Tipos:</strong>
                <div class="mt-1">
                  {#each data.pokemon.types as type}
                    <span class="badge bg-gradient bg-success me-1 text-capitalize px-4 py-2">{type}</span>
                  {/each}
                </div>
              </div>
  
              <div class="mb-3">
                <strong>Habilidades:</strong>
                <div class="mt-1">
                  {#each data.pokemon.abilities as ability}
                    <span class="badge bg-success me-1 text-capitalize px-4 py-2">{ability}</span>
                  {/each}
                </div>
              </div>
  
              <h5 class="mt-4 text-dark">Status Base</h5>
              <div class="list-group mb-3">
                {#each data.pokemon.stats as stat}
                  <div class="list-group-item d-flex justify-content-between align-items-center">
                    <span class="text-capitalize">{stat.name}</span>
                    <span class="badge bg-dark">{stat.value}</span>
                  </div>
                {/each}
              </div>
  
              <a href="/03/pokemon" class="btn btn-success mt-3">
                Back
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  